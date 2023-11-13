'use strict'

const fp = require('fastify-plugin')
const donnees_externes = require('../modules/donnees_externes.js')



/**
 * ### Plugin D'analyse de la pollution


/**
* ### Instantiation de l'objet 
* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const pollutionAnalyse = new donnees_externes.PollutionAnalyse()


module.exports = fp(async function (fastify, opts) {
  fastify.decorate('pollutionAnalyse', pollutionAnalyse)
})
