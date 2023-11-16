'use strict'



module.exports = async function (fastify, opts) {

    fastify.get('/historique', async function (request, reply) {
        const { texte } = request.query
        const { valeur } = request.query

        ///
        return fastify.historique.repete(texte, valeur)
})

fastify.post('/historique', async function (request, reply) {
    const { texte, valeur } = request.body


    ///
    return fastify.historique.repete(texte + "post", valeur)

})

}