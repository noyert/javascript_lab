//task 3
function my_compute_power_it(nb, p) {
    if(Number.isInteger(nb) && p >= 0) {
        var res = 1;
        for(var i=0; i<p; i++) {
            res *= nb;
        }
        return res;
    } else {
        console.log("Vos données ne sont pas des nombres entiers")
        return;
    }
}

var argv = require('minimist')(process.argv.slice(2));
console.dir(argv._[0]);

var result = my_compute_power_it(argv._[0], argv._[1])
if(Number.isInteger(result)){
    console.log(`Le résultat est ${result}`);
} 
