function bistro(str) {

    function isOperator(operator) {
        if (operator == '+' || operator == '-' || operator == '*' || operator == '/' || operator == '%') {
            return true;
        }
        return false;
    }

    function split(str) {
        var split = [""];
        if (typeof str === 'string') {
            for (var i = 0; i < str.length; i++) {
                if (!isOperator(str[i]) && str[i] == '(') {
                    split[split.length - 1] += str[i];
                    split.push("");
                } else if(!isOperator(str[i]) && str[i] == ')') {
                    split.push("");
                    split[split.length - 1] += str[i];
                } else if(!isOperator(str[i])){
                    split[split.length - 1] += str[i];
                }
                else if (split[split.length - 1]) {
                    split.push("");
                    split[split.length - 1] += str[i];
                    split.push("");
                }
            }
            return split
        }
    }

    var elem = split(str)
    console.log(elem)

    function priorityCalc(elem) {
        var calc = ""
        for(var i=0; i<elem.length; i++){
            console.log(elem)
            if(elem[i] == '('){
                console.log("op ()")
                console.log(elem[i+2])
                calc = calculate(elem[i+1], elem[i+2], elem[i+3])
                elem.splice(i, 5, calc)
                i=0
            }
        }
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
            // console.log(elem)
            if (elem[i] == '+' || elem[i] == '-') {
                console.log("op2")
                calc = calculate(elem[i - 1], elem[i], elem[i + 1])
                elem.splice(i - 1, 3, calc)
                i=0
            }
        }
        return calc
    }

    var f = {
        add: '+',
        sub: '-',
        div: '/',
        mlt: '*',
        mod: '%',
    };

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

    var result = priorityCalc(elem)
    return result
}

var res = bistro("20*(3+2)*(4-2)")
console.log(res)