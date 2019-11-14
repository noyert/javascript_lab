const LinkedListNode = require('./simple_list')
const LinkedListStack = require('./simple_stack')
const TreeNode = require('./simple_tree')
const list_get_size = require('./list_get_size')
const list_dump = require('./list_dump')
const list_add_elem_at_front = require('./list_add_elem_at_front')
const list_add_elem_at_back = require('./list_add_elem_at_back')
const list_add_elem_at_position = require('./list_add_elem_at_position')
const list_del_elem_at_front = require('./​list_del_elem_at_front​')
const list_del_elem_at_back = require('./​list_del_elem_at_back')
const list_del_elem_at_position = require('./​list_del_elem_at_position')
const list_get_elem_at_front = require('./​list_get_elem_at_front')
const list_get_elem_at_back = require('./list_get_elem_at_back')
const list_get_elem_at_position = require('./list_get_elem_at_position')
const stack_push = require('./stack_push')
const stack_pop = require('./​stack_pop')
const tree_is_empty = require('./​tree_is_empty')
const tree_get_size = require('./tree_get_size')

const data = 1
// create the first node
const list = new LinkedListNode(data);
// add a second node
list.next = new LinkedListNode(2);
// add a third node
list.next.next = new LinkedListNode(3);

const dataStack = 10
const stack = new LinkedListStack(dataStack)
stack.next = new LinkedListStack(20)
stack.next.next = new LinkedListStack(30)

const dataTree = 100
const tree = new TreeNode(dataTree)
tree.left = new TreeNode(200)
tree.right = new TreeNode(300)

// console.log(`La taille de la liste est de ${list_get_size(list)}`)
// list_dump(list)
// console.log(list_add_elem_at_front(list, 34))
// console.log(list_add_elem_at_back(list, 18))
// console.log(list_add_elem_at_position(list, 50, 1))
// console.log(list_del_elem_at_front(list))
// console.log(list_del_elem_at_back(list))
// console.log(list_del_elem_at_position(list,0))
// console.log(list_get_elem_at_front(list))
// console.log(list_get_elem_at_back(list))
// console.log(list_get_elem_at_position(list, 1))
// console.log(stack_push(stack))
// console.log(stack_pop(stack))
// console.log(`The tree ${tree_is_empty(tree)? 'is' : 'is not'} empty`)
console.log(`The number of nodes in tree is ${tree_get_size(tree)}`)