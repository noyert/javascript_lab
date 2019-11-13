String.prototype.my_concat = function(...arguments){
    let str = this.valueOf();
    var word = str;
    if(typeof str === 'string'){
        for(var i=0; i<arguments.length; i++){
            word += arguments[i];
        }
        return word;
    } else {
        console.log("Votre donnée n'est pas de type string")
        return;
    }
}