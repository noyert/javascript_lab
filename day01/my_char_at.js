String.prototype.my_char_at = function(index){
    let str = this.valueOf();
    var letter = "";
    // str = str.split(" ").join("")
    for(var i=0; i<index+1; i++){
        letter = str[i]
    }
    return letter;
}