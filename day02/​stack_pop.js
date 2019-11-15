const list_del_elem_at_back = require('./​list_del_elem_at_back')

module.exports = function stack_push(stack){
    if (stack.data == null || stack.data == undefined) {
        stack.data = 0
        return
    }
    list_del_elem_at_back(stack)
    return stack
}