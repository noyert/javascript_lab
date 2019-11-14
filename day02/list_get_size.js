module.exports = function list_get_size(list) {
    if(list.data == null || list.data == undefined){
        list.data = 0
        return
    } else {
        var nb = 0
        let current = list
        while (current !== null) {
            current = current.next;
            nb++
        }
        return nb
    }
}

