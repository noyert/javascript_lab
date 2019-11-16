module.exports = function tree_postfix(tree) {
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
        tree_postfix(tree.left)
        tree_postfix(tree.right)
        output += tree.data
    }
    return output
}

//  if (tree not empty)
//     postfix (tree left subtree)
//     postfix (tree right subtree)
//     print (tree token)
//  end if