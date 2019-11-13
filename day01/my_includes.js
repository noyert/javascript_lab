String.prototype.my_includes = function(chaîneRecherchée, position) {
    let str = this.valueOf();
    if (position == undefined){
        position = 0
    } 
    if(typeof str === 'string' && typeof chaîneRecherchée === 'string'){
        var charArray1 = str.split('');
        var charArray2 = chaîneRecherchée.split('');
        for (var i = 0; i < charArray1.length - charArray2.length + 1; i++) {
            // position = 0;
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
    } else {
        console.log("Vos données ne sont pas de type string")
        return;
    }
}