//task 7
function my_find_prime_sup(nb){
    if(Number.isInteger(nb)){
        for (var i = nb + 1;; i++) {
            var isPrime = true;
            for (var d = 2; d * d <= i; d++) {
                if (i % d === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                console.log(i);
                return i;
            }
        }
    } else {
        console.log("Votre donnée n'est pas un nombre entier")
        return;
    }
}

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv._[0]);

my_find_prime_sup(argv._[0]);