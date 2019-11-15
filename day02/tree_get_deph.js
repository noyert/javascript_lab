module.exports = function tree_get_deph(tree) {
    if (tree.data == null || tree.data == undefined) {
        tree.data = 0
        return
    }
    if(tree.left == null || tree.right == null){
        return 1
    }
    l = tree_get_deph(tree.left)
    r = tree_get_deph(tree.right)
    return (1 + ((l > r) ? l : r));
}