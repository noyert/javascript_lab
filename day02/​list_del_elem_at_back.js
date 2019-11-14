module.exports = function list_del_elem_at_back(list){
    if (list.data == null || list.data == undefined) {
        list.data = 0
        return
    }
    let current = list
    let prev = null
    while (current.next) {
        prev = current; 
        current = current.next;
    }
    prev.next = current.next;
    return list
}