/*
 * @Author: heluchao
 * @Date: 2021-01-21 15:38:13
 * @LastEditTime: 2021-01-21 18:00:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/tree/bt.js
 * 二叉树遍历
 */

const tree = {
    val: 'a',
    left: {
        val: 'b',
        left: {
            val: 'd',
            left: {
                val: 'h'
            }
        },
        right: {
            val: 'e',
            right: {
                val: 'i'
            }
        }
    },
    right: {
        val: 'c',
        left: {
            val: 'f',
            left: null
        },
        right: {
            val: 'g',
            right: null
        }
    }
};

// 先序遍历：根-左-右
//1
// const preOrder = (root) => {
//     if (!root) {
//         return;
//     }
//     console.log('root: ', root.val);
//     preOrder(root.left);
//     preOrder(root.right);
// };

//2
const preOrder = (root) => {
    if (!root) {
        return;
    }
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        console.log('n: ', n.val);
        if (n.right) {
            stack.push(n.right);
        }
        if (n.left) {
            stack.push(n.left);
        }
    }
};
preOrder(tree);
console.log('================================================');

//中序遍历：左-根-右
//1
// const inOrder = (root) => {
//     if (!root) {
//         return;
//     }
//     inOrder(root.left);
//     console.log('root: ', root.val);
//     inOrder(root.right);
// };

//2
const inOrder = (root) => {
    if (!root) {
        return;
    }
    const stack = [];
    let p = root;
    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log('n: ', n.val);
        p = n.right;
    }
};

inOrder(tree);
console.log('================================================');


//后序遍历：左-右-根
//1
// const postOrder = (root) => {
//     if (!root) {
//         return;
//     }
//     postOrder(root.left);
//     postOrder(root.right);
//     console.log('root: ', root.val);
// };

//2
const postOrder = (root) => {
    if (!root) {
        return;
    }
    const outputStack = [];
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        outputStack.push(n);
        if (n.left) {
            stack.push(n.left);
        }
        if (n.right) {
            stack.push(n.right);
        }
    }
    while (outputStack.length) {
        const n = outputStack.pop();
        console.log('n: ', n.val);
    }
};

postOrder(tree);