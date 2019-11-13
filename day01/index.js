var func1 = require('./my_to_upper_case')
var func2 = require('./my_to_lower_case')
var func3 = require('./my_concat')
var func4 = require('./my_char_at')

var argv = require('minimist')(process.argv.slice(2));
// console.dir(argv._[0]);

var res1 = argv._[0]
var res2 = argv._[1]
var res3 = argv._[2]
var res4 = argv._[3]

String.prototype.my_to_upper_case = func1
String.prototype.my_to_lower_case = func2
String.prototype.my_concat = func3
String.prototype.my_char_at = func4

var result1 = res1.my_to_upper_case()
var result2 = res2.my_to_lower_case()
var result3 = res3.my_concat("is", "a", "great", "day.")
var result4 = res4.my_char_at(1)

// console.log("mellon".my_to_upper_case())
// console.log("MELLON".my_to_lower_case())
// console.log('It'.my_concat(' is',' a',' great',' day.'))
// var sentence = 'The quick brown fox jumps over the lazy dog.'; 
// var index = 4;
// console.log('The character at index ' + index + ' is ' + sentence.my_char_at(index))

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

if(typeof res3 === 'string'){
    console.log(`Résultat: ${result3}`)
} else {
    console.log("Votre donnée n'est pas de type string")
    return;
}

if(typeof res4 === 'string'){
    console.log(`Résultat: ${result4}`)
} else {
    console.log("Votre donnée n'est pas de type string")
    return;
}