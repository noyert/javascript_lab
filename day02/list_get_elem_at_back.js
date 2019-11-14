module.exports = function list_del_elem_at_back(list){
    if (list.data == null || list.data == undefined) {
        list.data = 0
        return
    }
    let current = list
    while (current.next) {
        current = current.next;
    }
    return current.data
}