'use strict'

const fp = require('fastify-plugin')
const Echo = require('../modules/echo.js')

/**
 * ### Plugin Echo


/**
* ### Instantiation de l'objet 
* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const echo = new Echo()


module.exports = fp(async function (fastify, opts) {
  fastify.decorate('echo', echo)
})
