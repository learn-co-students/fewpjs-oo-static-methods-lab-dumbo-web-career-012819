class Formatter {
  
  static capitalize(string){
    return string[0].toUpperCase() + string.split('').splice(1).join('');
  }
 
  static sanitize(string){
   return string.replace(/[^\w\s\-\']/gi, '')
  }
 
   static titleize(string){
     const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
     
     return string.split(' ').map( word => 
      exceptions.includes(word) && string[0] != word ? word : this.capitalize(word)
    ).join(' ')
  }
 

}