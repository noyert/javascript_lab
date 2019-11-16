module.exports = function tree_infix(tree) {
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
        if (isOperator(tree.data)) {
            output += "("
        }
        tree_infix(tree.left)
        output += tree.data + " "
        tree_infix(tree.right)
        if(isOperator(tree.data)){
            output += ")"
        }
    }
    return output
}



// if (tree token is operator)
    //    print (open parenthesis)
    // end if
    // infix (tree left subtree)
    // print (tree token)
    // infix (tree right subtree)
    // if (tree token is operator)
    //    print (close parenthesis)
    // end if