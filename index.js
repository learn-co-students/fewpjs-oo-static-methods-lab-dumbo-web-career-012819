class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)

    }
    static sanitize(string) {
        return string.replace(/[^\w-,' ]/gi, '')
    }

    static titleize(string) {
        let noCap = ['the', "a", "an", "but", "of", "and", "for", "at", "by", "from"]
        let newCap = [];
        var i = 0
        let splitString = string.split(" ");

        for (i = 0; i < splitString.length; i++) {
            if (i == 0) {
                newCap.push(this.capitalize(splitString[i]))
            } else {
                if (noCap.includes(splitString[i])) {
                    newCap.push(splitString[i])
                } else {
                    newCap.push(this.capitalize(splitString[i]))
                }
            }
        }

        return newCap.join(" ")
    }
}