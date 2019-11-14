const list_get_size = require('./list_get_size')

module.exports = function list_get_elem_at_position(list, pos){
    if (list.data == null || list.data == undefined) {
        list.data = 0
        return
    }
    if(pos == null || pos == undefined || typeof pos !== 'number'){
        pos = 0
        return 
    }
    let current = list
    var i = 0;
    var length = list_get_size(list)
    if(pos<length){
        while (i < pos) {
            i++
            current = current.next;
        }
        return current.data
    } else {
        console.log("La position n'est pas valide")
        return
    }
}