module.exports = function my_char_at(index){
    let str = this;
    var letter = "";
    // str = str.split(" ").join("")
    for(var i=0; i<index+1; i++){
        letter = str[i]
    }
    return letter;
}