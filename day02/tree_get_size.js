module.exports = function tree_get_size(tree) {
    if (tree.data == null || tree.data == undefined) {
        tree.data = 0
        return
    }
    function hello(node) {

        if (node.left == null && node.right == null){
            return 1
        }
    
        if (node.left){
            const sizeLeft = hello(node.left)
        }
    
        if (node.right){
            const sizeRight = hello(node.right)
        }
    
        return 1 + sizeLeft + sizeRight
    }
<<<<<<< Updated upstream
    current = tree
    while(current !== null){
        current = current.right;
        nb++
    }
    return nb-1
}
=======
    var nb = hello(tree)
    // var nb = 0
    // let current = tree
    // while (current !== null) {
    //     current = current.left;
    //     nb++
    // }
    // current = tree
    // while(current !== null){
    //     current = current.right;
    //     nb++
    // }
    return nb
}
>>>>>>> Stashed changes
