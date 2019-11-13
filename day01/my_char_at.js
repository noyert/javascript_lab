String.prototype.my_char_at = function(index){
    let str = this.valueOf();
    var letter = "";
    // str = str.split(" ").join("")
    if(typeof str === 'string'){
        for(var i=0; i<index+1; i++){
            letter = str[i]
        }
        return letter;
    } else {
        console.log("Votre donnée n'est pas de type string")
        return;
    }
}