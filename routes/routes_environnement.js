'use strict'


module.exports = async function (fastify, opts) {


  /** 
   *### Indicateurs
   */
  fastify.get('/indicateurs', async function (request, reply) {
    const { ville } = request.query
    const pollution = await fastify.pollutionAnalyse.IndicateurVille(ville)

    const indicateurs = `
      Pour ${ville} : 
      Meteo : ${await fastify.meteoAnalyse.IndicateurVille(ville)}
      Pollution : ${pollution.status}
      Indice de pollution : ${pollution.valeur}
    `
;


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
 *### Meteo
 */
  fastify.get('/meteo', async function (request, reply) {
    const { ville } = request.query

    ///
    return await fastify.meteoAnalyse.IndicateurVille(ville)

  })

}