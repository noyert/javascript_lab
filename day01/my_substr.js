String.prototype.my_substr = function(début, lg){
    let str = this.valueOf();
    var word = ""
    if (typeof str === 'string'){
        for(var i=début; i<=lg; i++){
            word += str[i]
        }
    }
    return word
}