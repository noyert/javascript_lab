module.exports = function my_concat(...arguments){
    let str = this;
    var word = str + " ";
    for(var i=0; i<arguments.length; i++){
        word += arguments[i] + " ";
    }
    return word;
}
