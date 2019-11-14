const list_get_size = require('./list_get_size')
const list_del_elem_at_front = require('./​list_del_elem_at_front​')

module.exports = function list_del_elem_at_position(list, pos){
    if (list.data == null || list.data == undefined) {
        list.data = 0
        return
    }
    if(pos == null || pos == undefined || typeof pos !== 'number' || pos < 0){
        pos = 0
        return 
    }
    if(pos === 0){
        return list_del_elem_at_front(list)
    }
    let current = list
    var i = 0;
    let prev = null
    var length = list_get_size(list)
    if(pos<length){
        while (i < pos) {
            i++
            prev = current
            current = current.next;
        }
        prev.next = current.next;
        return list
    } else {
        console.log("La position n'est pas valide")
        return
    }
    
}