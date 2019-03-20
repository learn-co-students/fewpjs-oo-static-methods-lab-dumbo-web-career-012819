class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    const regex = /[\w+ \-+ \s+ \'+]/gmi
    let newArr = string.match(regex);
    if (newArr === null) {
      return ""
    } else {
      return newArr.join('');
    }
  }

  static titleize(sentence) {
    const skip = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const arr = sentence.split(' ');
    arr[0] = this.capitalize(arr[0]);
    let newString = []
    arr.map(element => {
      if (!skip.includes(element)) {
          element = this.capitalize(element);
      }
      newString.push(element)
    });
    return newString.join(" ");
  }

}

//
// Write a method static capitalize that takes in a string and capitalizes the first letter.
// Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
// Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
