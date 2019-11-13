module.exports = function my_to_lower_case() {
    let inputStr = this
    var strResult = ""
    for (var i = 0; i < inputStr.length; i++) {

        var letters = inputStr.charCodeAt(i)

        if (letters > 64 && letters < 91) {
            strResult += String.fromCharCode(letters + 32)
        } else {
            strResult += inputStr.charAt(i)
        }
    }
    return strResult
}