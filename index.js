class Formatter {
  //add static methods here

  static capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
  }


  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9 '-]/g, '')
  }


  static titleize(word) {
      switch (word) {
          case 'a':
            this.capitalize
            break;
          case 'an':
            this.capitalize
            break;
          case 'but':
            this.capitalize
            break;
          case 'of':
            this.capitalize
            break;
          case 'and':
            this.capitalize
            break;
          case 'for':
            this.capitalize
            break;
          case 'at':
            this.capitalize
            break;
          case 'by':
            this.capitalize
            break;
          case 'from':
            this.capitalize
            break;
            default:
            this.capitalize
      }
  }
}
