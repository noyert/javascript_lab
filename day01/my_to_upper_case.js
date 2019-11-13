module.exports = function my_to_upper_case() {
    let str = this;
        var word = "";
        for (i = 0; i < str.length; i++) {
            word += String.fromCharCode(str.charCodeAt(i) & 223);
        }
        return word;
}
