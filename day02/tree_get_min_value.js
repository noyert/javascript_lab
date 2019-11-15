module.exports = function tree_get_max_value(tree) {
    if (tree.data == null || tree.data == undefined) {
        tree.data = 0
        return
    }
    let current = tree
    var min = 0
    var lMin = current.data
    var rMin = current.data
    while (current.left !== null) {
        if (current.data > current.left.data) {
            lMin = current.left.data
        }
        current = current.left;
    }
    current = tree
    while (current.right !== null) {
        if (current.data > current.right.data) {
            rMin = current.right.data
        }
        current = current.right;
    }
    if(lMin < rMin){
        min = lMin
    } else {
        min = rMin
    }
    return min;
}