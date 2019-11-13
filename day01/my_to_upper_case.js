String.prototype.my_to_upper_case = function() {
    let str = this.valueOf();
    var word = "";
    for (i = 0; i < str.length; i++) {
        word += String.fromCharCode(str.charCodeAt(i) & 223);
    }
    return word;
}

