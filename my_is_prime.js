//task 6
function my_is_prime(nb) {
    if(Number.isInteger(nb)){
        var is_prime = "1";
        if(nb<2){
            is_prime = "0";
            console.log(is_prime)
        }
        if(nb == 2){
            is_prime = "1";
            console.log(is_prime)
        }
        for(var i = 2; i < nb; i++){
            if(nb % i === 0){
                is_prime = "0";
                console.log(is_prime)
                return false;
            } else {
                console.log(is_prime)
                return true;
            }
        }
    } else {
        console.log("Votre donnée n'est pas un nombre entier")
        return;
    }
}

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv._[0]);

my_is_prime(argv._[0]);