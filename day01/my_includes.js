String.prototype.my_includes = function(chaîneRecherchée, position) {
    let str = this.valueOf();
    var charArray1 = str.split('');
    var charArray2 = chaîneRecherchée.split('');
    if (position == undefined){
        position = 0
    } 
    for (var i = 0; i < charArray1.length - charArray2.length + 1; i++) {
        position = 0;
        for(var j = 0; j < charArray2.length; j++){
            if(charArray1[i+j] == charArray2[j]){
              position++;
            }
            if(position == charArray2.length){
              return true;
            }
          }
    }
    return false;
}