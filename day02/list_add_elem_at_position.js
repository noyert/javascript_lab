const LinkedListNode = require('./simple_list')
const list_get_size = require('./list_get_size')

module.exports = function list_add_elem_at_position(list, elem, pos){
    if (list.data == null || list.data == undefined) {
        list.data = 0
        return
    }
    if (elem == null || elem == undefined || typeof elem !== 'number') {
        elem = 0
        return
    }
    if(pos == null || pos == undefined || typeof pos !== 'number'){
        pos = 0
        return 
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
        const newData = new LinkedListNode(elem);
        newData.next = current; 
        prev.next = newData;
        return list
    } else {
        console.log("La position n'est pas valide")
        return
    }
}