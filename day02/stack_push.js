const LinkedListNode = require('./simple_list')
const list_get_elem_at_position = require('./list_get_elem_at_position')
const list_get_size = require('./list_get_size')

module.exports = function stack_push(stack){
    if (stack.data == null || stack.data == undefined) {
        stack.data = 0
        return
    }
    // var tabList = []
    // for(var i=0;;i++){
    //     tabList.push(list_get_elem_at_position(list, i))
    // }
    return stack
}