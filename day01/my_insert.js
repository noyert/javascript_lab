String.prototype.my_insert = function(string1, pos){
    let str = this.valueOf();
    if(pos == "undefined") {
        pos = 0;
    }
    var word = ""
    if(typeof str === 'string' && typeof string1 === 'string'){
        for(var i=0; i<pos; i++){
            word += str[i]
        }
        word += string1 + ' '
        for(var j=pos; j<str.length; j++){
            word += str[j]
        }
        return word
    } else {
        console.log("Vos données ne sont pas de type string")
        return;
    }
}