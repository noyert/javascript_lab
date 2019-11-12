//task 1
function my_compute_factorial_it(nb) {
    
    var factorial = 1;
    if(Number.isInteger(nb)){
        for (var i = 2; i <= nb; i++) {
            factorial *= i;
        }
        console.log(`Le résultat est ${factorial}`)
        return factorial;
    } else {
        console.log("Votre donnée n'est pas un nombre entier")
        return 0;
    }
}

var argv = require('minimist')(process.argv.slice(2));
// console.dir(argv._[0]);

my_compute_factorial_it(argv._[0]);