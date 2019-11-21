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
                } else if (!isOperator(str[i]) && str[i] == ')') {
                    split.push("");
                    split[split.length - 1] += str[i];
                } else if (!isOperator(str[i])) {
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

    function splitPoint(str) {
        var split = [""];
        if (typeof str === 'string') {
            for (var i = 0; i < str.length; i++) {
                 if (str[i] !== ".") {
                    split[split.length - 1] += str[i];
                }
                else if (split[split.length - 1]) {
                    split.push("");
                }
            }
            return split
        }
    }

    function spliceTab(tab, index, nbIndex, indexReplace) {
        if(index+nbIndex > tab.length){
            console.log("Votre nombre d'éléments à remplacer est supérieur à la taille du tableau")
            return tab
        }
        console.log(tab)
        var newTab = []
        var counter = 0;
        for(var i=0; i<tab.length; i++){
            if(i == index) {
                newTab[counter] = indexReplace
                counter++
            } else if(i < index || i > index + nbIndex -1){
                newTab[counter] = tab[i]
                counter++
            }
        }
        return newTab
    }

    // var tab = ['jio', 'dxfd', 'fr', 'KL', 'gre']
    // console.log(tab)
    // spliceTab(tab, 1, 4, 'fezko')

    function round(res) {
        resString = `${res}`
        resSplited = splitPoint(resString)
        console.log(resSplited)
        newRes = 0
        for (var i = 0; i < resSplited.length; i++) {
            if ((resSplited[1] * 1) >= 5) {
                newRes = (resSplited[0] * 1) + 1
            }
            else {
                newRes = resSplited[0] * 1
            }
        }
        return newRes
    }

    var elem = split(str)
    console.log(elem)

    function priorityCalc(elem) {
        var calc = ""
        for (var i = 0; i < elem.length; i++) {
            console.log(elem)
            if (elem[i] == '(') {
                console.log("op ()")
                console.log(elem[i + 2])
                calc = calculate(elem[i + 1], elem[i + 2], elem[i + 3])
                elem = spliceTab(elem, i, 5, calc)
                i = 0
            }
        }
        for (var i = 0; i < elem.length; i++) {
            console.log(elem)
            if (elem[i] == '*' || elem[i] == '/' || elem[i] == '%') {
                console.log("op1")
                calc = calculate(elem[i - 1], elem[i], elem[i + 1])
                elem = spliceTab(elem, i - 1, 3, calc)
                i = 0
            }
        }
        for (var i = 0; i < elem.length; i++) {
            console.log(elem)
            if (elem[i] == '+' || elem[i] == '-') {
                console.log("op2")
                calc = calculate(elem[i - 1], elem[i], elem[i + 1])
                elem = spliceTab(elem, i - 1, 3, calc)
                i = 0
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
    result = round(result)
    return result
}

var res = bistro("2.3*(2+3)")
console.log(res)
