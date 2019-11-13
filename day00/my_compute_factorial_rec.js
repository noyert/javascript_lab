//task 2
function my_compute_factorial_rec (nb) {
    var factorial = null;
    if(Number.isInteger(nb) && nb > 0){
        factorial = nb * my_compute_factorial_rec(nb - 1);
        return factorial;
    } else if (Number.isInteger(nb) && nb == 0) {
        return 1;
    } else {
        console.log("Votre donnée n'est pas un nombre entier")
        return;
    }
    
}

var argv = require('minimist')(process.argv.slice(2));
// console.dir(argv._[0]);

var result = my_compute_factorial_rec(argv._[0]);
console.log(`Le résultat est ${result}`)