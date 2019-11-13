//task 5
function my_compute_square_root(nb){
    if(Number.isInteger(nb)){
        var sqrt = nb / 2;
        var temp = 0;
        while(sqrt != temp){
            temp = sqrt;
            sqrt = ( nb/temp + temp) / 2;
        }
        return sqrt;
    } else {
        console.log("Votre donnée n'est pas un nombre entier")
        return;
    }
}

var argv = require('minimist')(process.argv.slice(2));
// console.dir(argv._[0]);

var result = my_compute_square_root(argv._[0]);
if(Number.isInteger(result)){
    console.log(`Le résultat est ${result}`);
} 