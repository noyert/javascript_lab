module.exports = function tree(size){
    sizee = size*4
    let tree = "";

    //feuillage
    for(let i = 1; i <= sizee; i++) {
        for(let j = 1; j <= sizee + sizee - 1; j++) {
            if(j <= sizee - i || j >= sizee + i) {
                tree += " ";
            } else {
                tree += "*";
            }
        }
        tree += "\n";
    }

    //tronc
    var nbSpace = sizee - 1 - (size - 1) / 2
    var strSpace = ""
    var strCroix = ""
    for(var m=0; m<nbSpace; m++){
        strSpace += " "
    }
    for(var n=0;n<size;n++){
        strCroix += "|"
    }
    var line = strSpace + strCroix
    for (var o = 0; o < size; o++) {    
        tree += line + "\n";
    }
    return tree;
}