// var func1 = require('./my_to_upper_case')
// var func2 = require('./my_to_lower_case')
// var func3 = require('./my_concat')
// var func4 = require('./my_char_at')
// var func5 = require('./my_includes')
require('./my_to_upper_case')
require('./my_to_lower_case')
require('./my_concat')
require('./my_char_at')
require('./my_includes')


var argv = require('minimist')(process.argv.slice(2));
// console.dir(argv._[0]);

var res1 = argv._[0]
var res2 = argv._[1]
var res3 = argv._[2]
var res4 = argv._[3]
var res5 = argv._[4]

var sentence1 = 'The quick brown fox jumps over the lazy dog.'; 
var index = 4;
var sentence2 = 'The quick brown fox jumps over the lazy dog.'; 
var word = 'fox';

var result1 = res1.my_to_upper_case()
var result2 = res2.my_to_lower_case()
var result3 = res3.my_concat("is", "a", "great", "day.")
var result4 = res4.my_char_at(index)
var result5 = res5.my_includes(word)

// console.log("mellon".my_to_upper_case())
// console.log("MELLON".my_to_lower_case())
// console.log('It'.my_concat(' is',' a',' great',' day.'))
// console.log('The character at index ' + index + ' is ' + sentence1.my_char_at(index))
// console.log(`The word "${word}" ${sentence2.my_includes(word2)? 'is' : 'is not'} in the sentence`);

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
    console.log(`The character at index ${index} is ${result4}`)
} else {
    console.log("Votre donnée n'est pas de type string")
    return;
}

if(typeof res5 === 'string'){
    console.log(`The word ${word} ${result5 ? 'is' : 'is not'} in the sentence`)
} else {
    console.log("Votre donnée n'est pas de type string")
    return;
}
