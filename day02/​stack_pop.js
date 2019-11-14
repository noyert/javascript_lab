module.exports = function stack_push(stack){
    if (stack.data == null || stack.data == undefined) {
        stack.data = 0
        return
    }
    return stack
}