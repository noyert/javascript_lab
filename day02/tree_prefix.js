module.exports = function tree_prefix(tree) {
    if (tree.data == null || tree.data == undefined) {
        tree.data = 0
        return
    }
    function isOperator(operator) {
        if (operator == '+' || operator == '-'
            || operator == '*' || operator == '/'
            || operator == '^') {
            return true;
        }
        return false;
    }
    var output = ""
    if(tree !== null){
        output += tree.data
        tree_postfix(tree.left)
        tree_postfix(tree.right)
    }
    return output
}

// if (tree not empty)
//     print (tree token)
//     prefix (tree left subtree)
//     prefix (tree right subtree)
//  end if