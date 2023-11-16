




class Historique {

    /**
     * 
     * @param type La chaine de type qui sera a répété
     * @param valeur  Nombre de répétition demandé
     * @returns Le type répété
     */
    repete(type, valeur) {
      ///
      let result = ''
  
      ///
      if (valeur == 0 ) return 'wouat ?'
  
      ///
      for (let historique = 0; historique < valeur; historique++) {
        result += ` ${type} `
      }
  
      ///
      return result
    }
  
  }
  
  
  module.exports = Historique;