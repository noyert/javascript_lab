//task 4
function my_compute_power_rec(nb, p){
    if(Number.isInteger(nb) && Number.isInteger(p)) {
        if(p == 0){
            return 1;
        } else {
            return (nb * my_compute_power_rec(nb, p-1));
        }
    } else {
        console.log("Vos données ne sont pas des nombres entiers")
        return;
    }
}

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv._[0]);

var result = my_compute_power_rec(argv._[0], argv._[1]);
if(Number.isInteger(result)){
    console.log(`Le résultat est ${result}`);
} 