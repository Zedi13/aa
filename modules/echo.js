
/**
 * Classe bidon, qui permet de répéter du texte
 * 
 *  Exemple d'utilisation
 * ```typescript
 *  const echo = new Echo()
 *  const reponse = echo.repete("Hello !", 3)
  * ```
 */



class Echo {

  /**
   * 
   * @param texte La chaine de texte qui sera a répété
   * @param repetitionNb  Nombre de répétition demandé
   * @returns Le texte répété
   */
  repete(texte, repetitionNb) {
    ///
    let result = ''

    ///
    if (repetitionNb == 0 ) return 'wouat ?'

    ///
    for (let echo = 0; echo < repetitionNb; echo++) {
      result += ` ${texte} `
    }

    ///
    return result
  }

}


module.exports = Echo;