const LinkedListNode = require('./simple_list')
const list_get_elem_at_front = require('./list_add_elem_at_front')
const list_get_size = require('./list_get_size')

module.exports = function stack_push(stack, elem){
    if (stack.data == null || stack.data == undefined) {
        stack.data = 0
        return
    }
    return list_get_elem_at_front(stack, elem)
}