class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9+ ''-]+/gi, '');
  }

  static titleize(string) {
    const avoidWords = 'the, a, an, but, of, and, for, at, by, from'.split(', ')
    const words = string.split(' ');
    const newSent = [];

    words.forEach((word, i) => {
      if (i === 0 || !avoidWords.includes(word)) {
        newSent.push(this.capitalize(word))
      } else {
        newSent.push(word)
      }
    })

    return newSent.join(' ');
  }
}
