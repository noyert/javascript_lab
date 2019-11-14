const LinkedListNode = require('./simple_list')

module.exports = function list_add_elem_at_front(list, elem) {
    if (list.data == null || list.data == undefined) {
        list.data = 0
        return
    }
    if (elem == null || elem == undefined || typeof elem !== 'number') {
        elem = 0
        return
    }
    let newData = new LinkedListNode(elem);
    newData.next = list
    return newData
}