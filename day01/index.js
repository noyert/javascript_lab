var func = require('./my_to_upper_case')

var argv = require('minimist')(process.argv.slice(2));
// console.dir(argv._[0]);

var res = argv._[0];

String.prototype.my_to_upper_case = func;

var result = res.my_to_upper_case()

// console.log("hello".my_to_upper_case())

if(typeof res === 'string'){
    console.log(`Résultat: ${result}`)
} else {
    console.log("Votre donnée n'est pas de type string")
    return;
}