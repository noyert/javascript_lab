var func1 = require('./my_to_upper_case')
var func2 = require('./my_to_lower_case')

var argv = require('minimist')(process.argv.slice(2));
// console.dir(argv._[0]);

var res1 = argv._[0];
var res2 = argv._[1];

String.prototype.my_to_upper_case = func1;
String.prototype.my_to_lower_case = func2;

var result1 = res1.my_to_upper_case()
var result2 = res2.my_to_lower_case()

// console.log("hello".my_to_upper_case())

if(typeof res1 === 'string'){
    console.log(`Résultat: ${result1}`)
} else {
    console.log("Votre donnée n'est pas de type string")
    return;
}

if(typeof res2 === 'string'){
    console.log(`Résultat: ${result2}`)
} else {
    console.log("Votre donnée n'est pas de type string")
    return;
}