class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    let newStr = ""
    for (let char of string){
      if (char.match(/[a-z]|[A-Z]|\d|\s|'|-/)){
        newStr += char;
      }
    }
    return newStr;
  }

  static titleize(sentence){
    let newSentence = []
    let sentArr = sentence.split(" ")
    for (let [i, word] of sentArr.entries()){
      if (i === 0){
        let wordCaps = word[0].toUpperCase() + word.slice(1)
        newSentence.push(wordCaps)
      }
      else if (word.match(/the\b|a\b|an\b|but\b|of\b|and\b|for\b|at\b|by\b|from\b/)){
        newSentence.push(word);
      }
      else {
        let wordCaps = word[0].toUpperCase() + word.slice(1)
        newSentence.push(wordCaps)
      }
    }
    return newSentence.join(' ')
  }
}
