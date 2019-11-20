function bistro(str) {

    function isOperator(operator) {
        if (operator == '+' || operator == '-' || operator == '*' || operator == '/' || operator == '%') {
            return true;
        }
        return false;
    }

    function isSeparator(separator) {
        if (separator == '+' || separator == '-' || separator == '*' || separator == '/' || separator == '%' || separator == '(' || separator == ')') {
            return true
        }
        return false
    }

    function splitNumber(str) {
        var numbers = [""];
        if (typeof str === 'string') {
            for (var i = 0; i < str.length; i++) {
                if (!isSeparator(str[i])) {
                    numbers[numbers.length - 1] += str[i];
                } else if (numbers[numbers.length - 1]) {
                    numbers.push("");
                }
            }
            return numbers
        }
    }

    function splitOperator(str) {
        var operators = [""];
        if (typeof str === 'string') {
            for (var i = 0; i < str.length; i++) {
                if (isOperator(str[i])) {
                    operators[operators.length - 1] += str[i];
                } else if (operators[operators.length - 1]) {
                    operators.push("");
                }
            }
            return operators
        }
    }

    function split(str) {
        var split = [""];
        if (typeof str === 'string') {
            for (var i = 0; i < str.length; i++) {
                if (!isSeparator(str[i])) {
                    split[split.length - 1] += str[i];
                } else if (split[split.length - 1]) {
                    split.push("");
                    split[split.length - 1] += str[i];
                    split.push("");
                }
            }
            return split
        }
    }

    // var numbers = splitNumber(str)
    // console.log(numbers)
    // var ops = splitOperator(str)
    // console.log(ops)
    var elem = split(str)
    console.log(elem)

    var f = {
        add: '+',
        sub: '-',
        div: '/',
        mlt: '*',
        mod: '%',
    };

    // Create array for Order of Operation and precedence
    f.ooo = [[[f.mlt], [f.div], [f.mod]], [[f.add], [f.sub]]];
    // console.log(f.ooo[0][1])

    str = str.replace(/[^0-9%^*\/()\-+.]/g, '');

    var fLength = f.ooo.length
    // console.log(fLength)

    var tab = elem
    console.log(tab)

    function priorityCalc(elem) {
        var calc = ""
        // for(var i=0; i<elem.length; i++){
        //     console.log(elem)
        //     if(elem[i] == '('){
        //         console.log("op (")
        //         calc = calculate(elem[i+1], elem[i+2], elem[i+3])
        //         elem.splice(elem[i+1], 5, calc)
        //         i=0
        //     }
        // }
        for (var i = 0; i < elem.length; i++) {
            console.log(elem)
            if (elem[i] == '*' || elem[i] == '/' || elem[i] == '%') {
                console.log("op1")
                calc = calculate(elem[i - 1], elem[i], elem[i + 1])
                elem.splice(i - 1, 3, calc)
                i=0
            }
        }
        for (var i = 0; i < elem.length; i++) {
            console.log(elem)
            if (elem[i] == '+' || elem[i] == '-') {
                console.log("op2")
                calc = calculate(elem[i - 1], elem[i], elem[i + 1])
                elem.splice(i - 1, 3, calc)
                i=0
            }
        }
        return calc
    }

    var result = priorityCalc(elem)
    return result

    // var output = 0
    // for (var i = 0; i < fLength; i++) {

    //     // Regular Expression to look for operators between floating numbers or integers
    //     var re = new RegExp('(\\d+\\.?\\d*)([\\' + f.ooo[i].join('\\') + '])(\\d+\\.?\\d*)');
    //     re.lastIndex = 0; // take precautions and reset re starting pos

    //     // Loop while there is still calculation for level of precedence
    //     while (re.test(str)) {
    //         output = calculate(RegExp.$1, RegExp.$2, RegExp.$3);
    //         if (isNaN(output) || !isFinite(output)){
    //             console.log("output is not a number")
    //             return output; // exit early if not a number
    //         }
    //         str = str.replace(re, output);
    //     }
    // }

    // return output

    function calculate(a, op, b) {
        if (isNaN(a) || isNaN(b)) {
            console.log("Un des nombres n'est pas valide")
            return
        }
        a = a * 1;
        b = b * 1;
        let result = ''
        if (isOperator(op)) {
            switch (op) {
                case f.add:
                    result = a + b;
                    break;
                case f.sub:
                    result = a - b;
                    break;
                case f.div:
                    result = a / b;
                    break;
                case f.mlt:
                    result = a * b;
                    break;
                case f.mod:
                    result = a % b;
                    break;
                default:
                    null;
            }
            return result
        } else {
            console.log("Votre opérateur n'est pas valide")
            return
        }
    }
}

var res = bistro("10+2*3")
console.log(res)