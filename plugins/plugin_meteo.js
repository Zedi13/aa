'use strict'

const fp = require('fastify-plugin')
const donnees_externes = require('../modules/donnees_externes.js')



/**
 * ### Plugin D'analyse de la pollution


/**
* ### Instantiation de l'objet 
* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const meteoAnalyse = new donnees_externes.MeteoAnalyse()


module.exports = fp(async function (fastify, opts) {
  fastify.decorate('meteoAnalyse', meteoAnalyse)
})


