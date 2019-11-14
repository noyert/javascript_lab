module.exports = function tree_get_deph(tree) {
    if (tree.data == null || tree.data == undefined) {
        tree = newNode
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