'use strict'

const fp = require('fastify-plugin')
const Historique = require('../modules/historique.js')


/**
 * ### Plugin Echo


/**
* ### Instantiation de l'objet 
* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const historique = new Historique()


module.exports = fp(async function (fastify, opts) {
  fastify.decorate('historique', historique)
})