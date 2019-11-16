module.exports = function order(str) {
    if (typeof str !== 'string' || str == null || str == undefined) {
        console.log("Votre paramètre n'est pas de type string")
        return
    }
    var i = 0, j; 
    while (i < str.length) { 
        j = i + 1; 
        while (j < str.length) { 
            if (str[j] < str[i]) { 
                var temp = str[i]; 
                str[i] = str[j]; 
                str[j] = temp; 
            } 
            j++; 
        } 
        i++; 
    } 
}