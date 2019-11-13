require('./my_to_upper_case')
require('./my_to_lower_case')
require('./my_concat')
require('./my_char_at')
require('./my_includes')
require('./ is_empty')
require('./my_insert')
require('./my_split')
require('./my_substr')

var sentence = 'The quick brown fox jumps over the lazy dog.'; 
var index = 4;
var word = "fox";
var position = 0;
var str = 'Mozilla';

console.log("mellon".my_to_upper_case())
console.log("MELLON".my_to_lower_case())
console.log('It'.my_concat(' is',' a',' great',' day.'))
console.log('The character at index ' + index + ' is ' + sentence.my_char_at(index))
console.log(`The word "${word}" ${sentence.my_includes(word, position)? 'is' : 'is not'} in the sentence`);
console.log(`The sentence ${sentence.is_empty()? 'is' : 'is not'} empty`);
console.log(sentence.my_insert(word, 16))
var words = sentence.my_split(' ');
console.log(words[3])
console.log(str.my_substr(1, 2));


// var argv = require('minimist')(process.argv.slice(2));
// console.dir(argv._[0]);

// var res1 = argv._[0]
// var res2 = argv._[1]
// var res3 = argv._[2]
// var res4 = argv._[3]
// var res5 = argv._[4]
// var res6 = argv._[5]

// var result1 = res1.my_to_upper_case()
// var result2 = res2.my_to_lower_case()
// var result3 = res3.my_concat("is", "a", "great", "day.")
// var result4 = res4.my_char_at(index)
// var result5 = res5.my_includes(word, position)
// var result6 = res6.is_empty()

// if(typeof res1 === 'string'){
//     console.log(`Résultat: ${result1}`)
// } else {
//     console.log("Votre donnée n'est pas de type string")
//     return;
// }

// if(typeof res2 === 'string'){
//     console.log(`Résultat: ${result2}`)
// } else {
//     console.log("Votre donnée n'est pas de type string")
//     return;
// }

// if(typeof res3 === 'string'){
//     console.log(`Résultat: ${result3}`)
// } else {
//     console.log("Votre donnée n'est pas de type string")
//     return;
// }

// if(typeof res4 === 'string'){
//     console.log(`The character at index ${index} is ${result4}`)
// } else {
//     console.log("Votre donnée n'est pas de type string")
//     return;
// }

// if(typeof res5 === 'string'){
//     console.log(`The word ${word} ${result5 ? 'is' : 'is not'} in the sentence`)
// } else {
//     console.log("Votre donnée n'est pas de type string")
//     return;
// }

// if(typeof res6 === 'string'){
//     console.log(`The sentence ${result6 ? 'is' : 'is not'} empty`)
// } else {
//     console.log("Votre donnée n'est pas de type string")
//     return;
// }
