String.prototype.is_empty = function(){
    let str = this.valueOf();
    if(typeof str === 'string'){
        return (str === undefined || str == null || str.length <= 0) ? true : false;
    } else {
        console.log("Votre donnée n'est pas de type string")
        return;
    }
    
}