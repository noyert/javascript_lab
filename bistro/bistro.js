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
        if (index + nbIndex > tab.length) {
            console.log("Votre nombre d'éléments à remplacer est supérieur à la taille du tableau")
            return
        }
        var newTab = []
        var counter = 0;
        for (var i = 0; i < tab.length; i++) {
            if (i == index) {
                newTab[counter] = indexReplace
                counter++
            } else if (i < index || i > index + nbIndex - 1) {
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

    function mySubStr(str, index, length) {
        if (length == undefined || length == null) {
            length = str.length - index
        }
        var nexStr = ""
        if (typeof str === 'string') {
            for (var i = index; i <= index + length - 1; i++) {
                nexStr += str[i]
            }
        } else {
            console.log("Vos données ne sont pas de type string")
            return;
        }
        return nexStr
    }

    function round(res) {
        let resString = `${res}`
        let resSplited = splitPoint(resString)
        let newSplit = simpleSplit(resSplited[1])
        let newRes = 0
        if (newSplit == null || newSplit === undefined) {
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
        while (elem.indexOf('(') !== -1) {
            var tab = []
            counter = 0
            for (var i = elem.indexOf('('); i < elem.indexOf(')') - 1; i++) {
                tab.push(elem[i + 1])
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

    function add(str1, str2) {

        let sum = "";

        let str1Length = str1.length;
        let str2Length = str2.length;

        if (str2Length > str1Length) {
            let temp = str2;
            str2 = str1;
            str1 = temp;
        }

        let carry = 0;  // number that is carried to next decimal place, initially zero.
        let a;
        let b;
        let temp;
        let digitSum;

        for (let i = 0; i < str1.length; i++) {
            // get ith digit of str1 from right, we store it in a
            a = str1.charAt(str1.length - 1 - i)*1;
            // get ith digit of str2 from right, we store it in b  
            b = str2.charAt(str2.length - 1 - i)*1;
            // make sure b is a number, (this is useful in case, str2 is shorter than str1   
            b = (b) ? b : 0;
            // add a and b along with carry, store it in a temp string.
            temp = `${(carry + a + b)}`
            // console.log(temp)
            digitSum = temp.charAt(temp.length - 1);
            // split the string into carry and digitSum ( least significant digit of abSum.
            carry = temp.substr(0, temp.length - 1)*1;
            // if carry is not number, make it zero.
            carry = (carry) ? carry : 0;
            // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.
            sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;
        }
        return sum;
    }

    function sub(str1, str2) {
        let sum = "";
        let isNegative = false

        if(str1 < str2){
            let temp = str2;
            str2 = str1;
            str1 = temp;
            isNegative = true
        }

        let str1Length = str1.length;
        let str2Length = str2.length;

        if (str2Length > str1Length) {
            let temp = str2;
            str2 = str1;
            str1 = temp;
        }

        let carry = 0;  // number that is carried to next decimal place, initially zero.
        let a;
        let b;
        let temp;
        let digitSum;

        for (let i = 0; i < str1.length; i++) {
            // get ith digit of str1 from right, we store it in a
            a = parseInt(str1.charAt(str1.length - 1 - i));
            // get ith digit of str2 from right, we store it in b  
            b = parseInt(str2.charAt(str2.length - 1 - i));
            // make sure b is a number, (this is useful in case, str2 is shorter than str1   
            b = (b) ? b : 0;
            // add a and b along with carry, store it in a temp string.
            temp = `${((a-carry) - b)}` 
            digitSum = (temp < 0) ? `${(10+(temp)*1)}` : temp
            // split the string into carry and digitSum ( least significant digit of abSum.
            carry = (temp < 0) ? 1 : 0
            // if carry is not number, make it zero.
            carry = (carry) ? carry : 0;
            // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.
            sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;
        }
        sum = (sum[0] == 0) ? mySubStr(sum, 1) : sum
        if(isNegative){
            sum = '-' + sum
        }
        return sum;
    }

    function mod(a, b) 
    { 
        // Initialize result 
        var res = 0; 
        // One by one process all digits of 'num' 
        for (var i = 0; i < a.length; i++) 
            res = (res * 10 + (a.charAt(i))*1 - '0') % b; 
        return res; 
    } 

    function calculate(a, op, b) {
        if (isNaN(a) || isNaN(b)) {
            console.log("Un des nombres n'est pas valide")
            return
        }
        let result = ''
        if (isOperator(op)) {
            switch (op) {
                case f.add:
                    result = add(a, b);
                    break;
                case f.sub:
                    result = sub(a, b);
                    break;
                case f.div:
                    result = a / b;
                    break;
                case f.mlt:
                    result = a * b;
                    break;
                case f.mod:
                    result = mod(a, b);
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

var res = bistro("532-33")
console.log(res)