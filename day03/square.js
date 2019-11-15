module.exports = function square(x, y, edge, display) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.log("Vos 2 premiers paramètres doivent être des nombres")
        return
    }
    if(edge == undefined){
        edge = "o"
    }
    if(display == undefined){
        var line = "-"
        var col = "|"
    } else {
        var line = display
        var col = display
    }
    var output = "";
    for (var i = 1; i <= x; i++) {
        if(i==1 || i == y){
            output += edge
        } else if(i>1 && i<y) {
            output += col
        } else {
            output += ""
        }
        for (var j = 1; j <= y; j++) {
            if (i == 1 || i == y ) {
                output += line
            }
            else {
                output += " "
            }
        }
        if(i==1 || i == y){
            output += edge
        } else if(i>1 && i<y) {
            output += col
        } else {
            output += ""
        }
        output += "\n"
    }
    return output
    
}
