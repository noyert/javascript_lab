module.exports = function tree_get_max_value(tree) {
    if (tree.data == null || tree.data == undefined) {
        tree.data = 0
        return
    }
    let current = tree
    var lMax = current.data
    var rMax = current.data
    while (current.left !== null) {
        if (current.data < current.left.data) {
            lMax = current.left.data
        }
        current = current.left;
    }
    current = tree
    while (current.right !== null) {
        if (current.data < current.right.data) {
            rMax = current.right.data
        }
        current = current.right;
    }
    if(lMax > rMax){
        max = lMax
    } else {
        max = rMax
    }
    return max;
}