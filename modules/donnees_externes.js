/**
 * # ⚙ Génération des indicateurs
 * ## *Module d'analyse des données externes*
 *
 * ## Ce module met à disposition :
 * - la Classe [[MeteoAnalyse]] qui permet la génération d'indicateurs liés à la météo 
 * - la Classe [[PollutionAnalyse]] qui permet la génération d'indicateurs liés à la pollution
 * 
 * @module
 */
const ApiAqicn = require('./cnxAPI/aqicn.js')
const ApiMeteoConcept = require('./cnxAPI/meteo_concept.js')
 


const api_meteoConcept = new ApiMeteoConcept()
const api_aqicn = new ApiAqicn()


/**
 * # ⚙ Génération des indicateurs
 * ## *Classe d'analyse des données externes*
 * Analyse de la pollution grace à une récupération d'informations via des API externes
 * 
 * ## Méthodes utilisables : 
 * - [[PollutionAnalyse.IndicateurVille]] : Renvoi l'indicateur pollution d'une ville
 * 
 */
class PollutionAnalyse {

  /**
   * Renvoi un indicateur sur le niveau de pollution d'une ville
   * @param VilleNom Nom de la ville ciblée
   * @returns Indicateur de pollution
   */
  async IndicateurVille(VilleNom) {
   
    /// On appel l'API
    const result = await api_aqicn.appel(VilleNom)

    /// Si une erreur, on arrete tout de suite de traitement
    if (result.status != 'ok') { return 'Inconnu' }

    /// On test maintenant la valeur retournée, pour retourner, sous la forme d'une chaine, un indicateur trés pertinent
    if (result.data.aqi <= 50) return {"status" : "faible","valeur":result.data.aqi}
    if (result.data.aqi <= 100) return {"status" : "modéree","valeur": result.data.aqi}
    if (result.data.aqi <= 150) return {"status" : "importante","valeur": result.data.aqi}
    if (result.data.aqi <= 200) return {"status" : "tres importante","valeur": result.data.aqi}
    if (result.data.aqi <= 300) return {"status" : "trop importante","valeur": result.data.aqi}
    return {"status" : "Run.","valeur": result.data.aqi}
  }
}


/**
 * # ⚙ Génération des indicateurs
 * ## *Classe d'analyse des données externes*
 * Analyse de la météo grace à une récupération d'informations via des API externes
 * 
 * ## Méthodes utilisables : 
 * - [[MeteoAnalyse.IndicateurVille]] : Renvoi l'indicateur météo d'une ville
 * 
 * ## Exemple d'utilisation : 
 * ```typescript
 * import { MeteoAnalyse } from "../modules/environnement/donnees_externes.js"
 * const meteo = new MeteoAnalyse()
 * console.log(await meteo.IndicateurVille("aix en provence"))
 * ```
 */
class MeteoAnalyse {

  /**
   * Renvoi un indicateur sur le niveau de pollution d'une ville
   * @param villeNom Nom de la ville ciblée
   * @returns Indicateur de meteo
   */
  async IndicateurVille(villeNom) {

    /// Récupération du code INSEE de la ville
    const villeInformations = await api_meteoConcept.villeInformations(villeNom)

    // Un soucis ? 
    if (!villeInformations || !villeInformations.cities || villeInformations.cities.length == 0) { return 'Inconnu' }

    // Mode feignasse : on récupére la premiere ville trouvée
    const inseeCode = villeInformations.cities[0].insee

    /// Récupération de la meteo de la ville
    const villeMeteo = await api_meteoConcept.meteo(inseeCode)

    // On traite les informations du premier jour
    const jour1Meteo = villeMeteo.forecast[0]

    /// On détermine notre indicateur en fonction de la t°
    if (jour1Meteo.tmin <= -10) return '!!! au secours !!!'
    if (jour1Meteo.tmin <= 0) return 'Ne pas oublier sa crosse'
    if (jour1Meteo.tmin <= 10) return 'Winter is coming'
    if (jour1Meteo.tmin <= 20) return "Frisquet"
    if (jour1Meteo.tmin <= 30) return "Pas mal, pas mal"
    return "Nope ... "
  }

}

exports.MeteoAnalyse = MeteoAnalyse
exports.PollutionAnalyse = PollutionAnalyse;