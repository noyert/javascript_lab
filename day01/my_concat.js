String.prototype.my_concat = function(...arguments){
    let str = this.valueOf();
    var word = str + " ";
    for(var i=0; i<arguments.length; i++){
        word += arguments[i] + " ";
    }
    return word;
}
