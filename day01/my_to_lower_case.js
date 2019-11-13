String.prototype.my_to_lower_case = function() {
    let str = this.valueOf();
    var strResult = ""
    for (var i = 0; i < str.length; i++) {

        var letters = str.charCodeAt(i)

        if (letters > 64 && letters < 91) {
            strResult += String.fromCharCode(letters + 32)
        } else {
            strResult += str.charAt(i)
        }
    }
    return strResult
}