/**
 * # 🌍 Information sur la pollution 
 * ## *Module de connexion à une API tierce*
 * 
 * Ce module met à disposition la Classe [[ApiAqicn]] qui permet une utilisation de l'API 'aqicn'
 * 
 * -Vous trouverez les informations sur l'API 'aqicn' à l'adresse suivante : https://aqicn.org/faq/ 
 * et un exemple de mise en pratique : https://aqicn.org/city/france/paca/aix-centre-ecole-art
 * 
 * @module
 */

const axios = require('axios')
require('dotenv').config()


// Chargement des variables d'environnements définies dans notre .env (Bonne pratique de le faire ici et non globalement ? )
//dotenv.config()


/**
 * # 🌍 Information sur la pollution 
 * ## *Classe de connexion à une API tierce* 
 * Récupére les informations sur la pollution des villes, via l'API Publique 'aqicn'
 * 
 * ## Méthode utilisable : 
 * - [[appel]] : récupère les informations de pollution d'une ville
 * 
 * ## Exemple d'utilisation :
 * ```typescript
 * import { ApiAqicn } from "../modules/cnxAPI/aqicn.js"
 * const api_aqicn = new ApiAqicn()
 * console.log(await api_aqicn.appel("aix-en-provence"))
 * console.log(await api_aqicn.appel(""))
 * console.log(await api_aqicn.appel("truc_muche"))
 * ```
 * 
 * ## Documentation de l'API tierce : 
 * https://aqicn.org/faq/
 */
class ApiAqicn {
  token

  constructor() {
    this.token = (process.env.APIKEY_AQICN == undefined ?  '' : process.env.APIKEY_AQICN )
  }

  /**
   * Fonction d'appel de l'API
   * 
   * @ville ville Nom de la ville dont on souhaite les indicateurs
   * @returns Données structurée en JSON
   */
  async appel(ville) {

    console.log("VILLE >"+ville+"<")

    // Test des parametres envoyés
    if (ville == '') {
      console.log("VILLE VIDE")
      return { "status": "error", "data": "Merci d'indiquer une ville" }
    }

    // On fait l'appel
    const reponse = await axios(
      {
        method: 'get',
        url: `https://api.waqi.info/feed/${ville}/?token=${this.token}`
      })


    // On retourne notre résultat
    return reponse.data
  }



}

module.exports = ApiAqicn