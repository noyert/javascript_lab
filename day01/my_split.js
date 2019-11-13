String.prototype.my_split = function(séparateur) {
    let str = this.valueOf();
    var words = [""];
    if (typeof str === 'string') {
        for (var i = 0; i < str.length; i++){
            if (str[i] !== séparateur){
                words[words.length - 1] += str[i];
            } else if (words[words.length - 1]){
                words.push("");
            }
        }
    }
    return words
}