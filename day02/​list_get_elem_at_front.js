module.exports = function list_get_elem_at_front(list) {
    if (list.data == null || list.data == undefined) {
        list.data = 0
        return
    }
    let current = list
    var i = 0;
    if (i === 0) {
        return current.data
    }
    
}