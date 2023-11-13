'use strict'


module.exports = async function (fastify, opts) {


  /** 
   *### Indicateurs
   */
  fastify.get('/indicateurs', async function (request, reply) {
    const { ville } = request.query

    const indicateurs = `
      Pour ${ville} : 
      Meteo : ${await fastify.meteoAnalyse.IndicateurVille(ville)}
      Pollution : ${await fastify.pollutionAnalyse.IndicateurVille(ville)}
      `

    ///
    return indicateurs

  })



  /** 
 *### Pollution
 */
  fastify.get('/pollution', async function (request, reply) {
    const { ville } = request.query

    ///
    return await fastify.pollutionAnalyse.IndicateurVille(ville)

  })



  /** 
 *### MEteo
 */
  fastify.get('/meteo', async function (request, reply) {
    const { ville } = request.query

    ///
    return await instance.meteoAnalyse.IndicateurVille(ville)

  })

}