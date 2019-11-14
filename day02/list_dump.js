module.exports = function list_dump(list){
    if(list.data == null || list.data == undefined){
        list.data = 0
        return
    } else {
        let current = list
        while (current !== null) {
            console.log(current.data)
            current = current.next;
        }
        return
    }
}