module.exports = function tree_is_empty(tree){
    if (tree.data == null || tree.data == undefined) {
        tree.data = 0
        return
    }
    var nb = 0
    let current = tree
    while (current !== null) {
        current = current.left;
        nb++
    }
    while(current !== null){
        current = current.right;
        nb++
    }
    return nb+1
}