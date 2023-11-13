'use strict'


module.exports = async function (fastify, opts) {


  fastify.get('/repete', async function (request, reply) {
    const { texte } = request.query

    ///
    return fastify.echo.repete(texte, 1)
  })


  fastify.get('/echo', async function (request, reply) {
    const { texte, echoNb } = request.query

    ///
    return fastify.echo.repete(texte, echoNb)
  })
}
