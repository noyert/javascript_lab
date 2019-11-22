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
            return 
        }
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

    function simpleSplit(str) {
        var split = [""]
        if (typeof str === 'string') {
            for (var i = 0; i < str.length; i++) {
                split[split.length - 1] += str[i]
                if (split[split.length - 1]) {
                    split.push("")
                }
            }
            return split
        }
    }
    function round(res) {
        let resString = `${res}`
        let resSplited = splitPoint(resString)
        let newSplit = simpleSplit(resSplited[1])
        let newRes = 0
        if(newSplit == null || newSplit === undefined){
            return res
        }
        for (var i = 0; i < resSplited.length; i++) {
            if (newSplit[0] >= 5) {
                newRes = (resSplited[0] * 1) + 1
            }
            else {
                newRes = resSplited[0] * 1
            }
        }
        return newRes
    }

    var elem = split(str)

    function priorityCalc(elem) {
        var calc = ""
        while(elem.indexOf('(') !== -1){
            var tab = []
            counter = 0
            for (var i = elem.indexOf('('); i < elem.indexOf(')') - 1; i++) {
                tab.push(elem[i+1])
            }
            var length = tab.length + 2
            for (var i = 0; i < tab.length; i++) {
                if (tab[i] == '*' || tab[i] == '/' || tab[i] == '%') {
                    calc = calculate(tab[i - 1], tab[i], tab[i + 1])
                    tab = spliceTab(tab, i - 1, 3, calc)
                    i = 0
                }
            }
            for (var i = 0; i < tab.length; i++) {
                if (tab[i] == '+' || tab[i] == '-') {
                    calc = calculate(tab[i - 1], tab[i], tab[i + 1])
                    tab = spliceTab(tab, i - 1, 3, calc)
                    i = 0
                }
            }
            elem = spliceTab(elem, elem.indexOf('('), length, calc)
        }
        for (var i = 0; i < elem.length; i++) {
            if (elem[i] == '*' || elem[i] == '/' || elem[i] == '%') {
                calc = calculate(elem[i - 1], elem[i], elem[i + 1])
                elem = spliceTab(elem, i - 1, 3, calc)
                i = 0
            }
        }
        for (var i = 0; i < elem.length; i++) {
            if (elem[i] == '+' || elem[i] == '-') {
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

    function mySubStr(str, index, length){
        if(length == undefined || length == null){
            length = str.length - index
        }
        var nexStr = ""
        if (typeof str === 'string'){
            for(var i=index; i <= index + length - 1; i++){
                nexStr += str[i]
            }
        } else {
            console.log("Vos données ne sont pas de type string")
            return;
        }
        return nexStr
    }

    function bigNumber(nb){
        if(nb === Infinity){
            return console.log("le nombre entrer est considéré comme infini")
        }
        if(nb<=Number.MAX_SAFE_INTEGER){
            return `${nb}`
        }
        var result = '';
        var xStr = `${nb}`;
        var digitCount = xStr.indexOf('e') === -1 ? xStr.length : ((mySubStr(xStr, xStr.indexOf('e') + 1))*1 + 1)
        for (var i = 1; i <= digitCount; i++) {
          var mod = `${(nb % 10**i)}`;
          var exponent = (mod.indexOf('e') === -1) ? 0 : (mod.substr(mod.indexOf('e')+1))*1;
          if ((exponent === 0 && mod.length !== i) || (exponent > 0 && exponent !== i-1)) {
            result = '0' + result;
          }
          else {
            result = mod.charAt(0) + result;
          }
        }
        return result;
    }

    var result = priorityCalc(elem)
    result = bigNumber(result)
    result = round(result)
    // result = bigNumber(result)
    return result
}

var res = bistro("(22+23+21)*2")
console.log(res)