class Formatter {
 static capitalize(name){
     return name.charAt(0).toUpperCase() + name.slice(1);
 }

 static sanitize (string){
 return string.replace(/[^A-Za-z0-9-" ']+/g, '');
 }

 static titleize(string) {
    const exclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    let arr = string.split(' ');

    let title = arr.map(word => {
        if(word === arr[0]) {
            return this.capitalize(word);
        }
        else if(exclude.includes(word)) {
            return word;
        } else {
            return this.capitalize(word);
        }
    });
    return title.join(' ');
     }

}
  //add static methods here
