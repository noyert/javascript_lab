const LinkedListNode = require('./simple_list')

module.exports = function list_add_elem_at_back(list, elem) {
    if (list.data == null || list.data == undefined) {
        list.data = 0
        return
    }
    if (elem == null || elem == undefined || typeof elem !== 'number') {
        elem = 0
        return
    }
    let current = list
    while (current.next) {
        current = current.next;
    }
    const newData = new LinkedListNode(elem);
    current.next = newData;
    return list
}