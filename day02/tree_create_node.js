const TreeNode = require('./simple_tree')

module.exports = function tree_create_node(tree, value) {
    const newNode = new TreeNode(value);
    if (tree.data == null || tree.data == undefined) {
        tree = newNode
        return
    }
    if (value == null || value == undefined || typeof value !== 'number') {
        value = 0
        return
    }
    let current = tree
    while(current !== null){
        if(newNode.data < current.data){
            if(!current.left){
                current.left = newNode
                break;
            } else {
                current = current.left;
            }
        } else if(newNode.data > current.data) {
            if(!current.right){
                current.right = newNode
                break;
            } else {
                current = current.right;
            }
        } else {
            console.log("Try Different Value");
            break;
        }
    }
    return tree
}