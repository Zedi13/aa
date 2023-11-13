/**
 * # 🌍 Information sur la météo 
 * ## *Module de connexion à une API tierce*
 *
 * Ce module met à disposition la Classe [[ApiMeteoConcept]] qui permet une utilisation de l'API de 'Meteo Concept'
 * 
 * Vous trouverez les informations sur l'API de 'Meteo Concept' à l'adresse suivante : https://api.meteo-concept.com/documentation
 * 
 * @module
 */
const axios = require('axios')
require('dotenv').config()

// Chargement des variables d'environnements définies dans notre .env (Bonne pratique de le faire ici et non globalement ? )
//dotenv.config()


/**
 * # 🌍 Information sur la météo 
 * ## *Classe de connexion à une API tierce*
 * Récupérer les informations meteo des villes, via l'API de 'Météo Concept'
 * 
 * ## Méthodes utilisables : 
 * - [[ephemeride]] : récupère l'ephemeride d'une ville
 * - [[meteo]] : récupère la météo d'une ville
 * - [[villeInformations]] : récupère les informations d'une ville
 * 
 * 
 * ## Exemple d'utilisation : 
 * ```typescript
 * import { ApiMeteoConcept } from "../modules/cnxAPI/meteo_concept.js"
 * const api_meteo = new ApiMeteoConcept()
 * console.log(api_meteo.villeInformations("aix-en-provence"))
 * console.log(api_meteo.ephemeride("13001"))
 * ```
 * 
 * ## Documentation de l'API tierce : 
 * https://api.meteo-concept.com/documentation
 */
class ApiMeteoConcept {
  token


  constructor() {
    this.token = process.env.APIKEY_METEO_CONCEPT ? process.env.APIKEY_METEO_CONCEPT : ''
  }

  /**
   * Récupére l'ephéméride d'une ville a partir de son code insee
   * 
   * @param inseeCode Code insee de la ville dont on souhaite l'ephemeride
   * @returns Données structurée en JSON
   */
  async ephemeride(inseeCode) {

    // Test des parametres envoyés
    if (inseeCode == '') {
      return { "status": "error", "data": "Merci d'indiquer un code insee" }
    }

    // On fait l'appel
    const reponse = await axios(
      {
        method: 'get',
        url: `https://api.meteo-concept.com/api/ephemeride/1?token=${this.token}&insee=${inseeCode}`
      })


    // On retourne notre résultat
    return reponse.data
  }

  /**
   * Récupére les prévisions méteo d'une ville a partir de son code insee
   * 
   * @param inseeCode Code insee de la ville dont on souhaite l'ephemeride
   * @returns Données structurée en JSON
   */
  async meteo(inseeCode) {

    // Test des parametres envoyés
    if (inseeCode == '') {
      return { "status": "error", "data": "Merci d'indiquer un code insee" }
    }

    // On fait l'appel
    const reponse = await axios(
      {
        method: 'get',
        url: `https://api.meteo-concept.com/api/forecast/daily?token=${this.token}&insee=${inseeCode}`
      })


    // On retourne notre résultat
    return reponse.data
  }


  /**
   * Récupére les informations d'une ville a partir de son nom
   *   (Code Insee, latitude/longitude, .. )
   * 
   * @param villeNom Nom de la ville dont on souhaite récupérer les informations
   * @returns Tableau de données structurée en JSON
   */
  async villeInformations(villeNom) {

    // Test des parametres envoyés
    if (villeNom == '') {
      return { "status": "error", "data": "Merci d'indiquer un nom de ville" }
    }

    // On fait l'appel
    const reponse = await axios(
      {
        method: 'get',
        url: `https://api.meteo-concept.com/api/location/cities?token=${this.token}&search=${villeNom}`
      })

    // On retourne notre résultat
    return reponse.data
  }

}


module.exports = ApiMeteoConcept