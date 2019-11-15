module.exports = function tree(size){
    sizee = size*4
    let tree = "";
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
    for(let k=sizee; k <= sizee; k++){
        for(let l=sizee; l <= sizee + sizee; l++){
            if(l <= sizee - k || l >= sizee + k){
                tree += " " 
            } else {
                tree += "|" 
            }
        }
    }
    return tree;
}