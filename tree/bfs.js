/*
 * @Author: heluchao
 * @Date: 2021-01-21 15:23:27
 * @LastEditTime: 2021-01-21 15:33:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/tree/bfs.js
 * 树结构的广度优先遍历
 */

const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: []
                }, 
                {
                    val: 'e',
                    children: []
                }
            ]
        }, 
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: []
                }, 
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
};

// 1.新建队列，根节点入队
// 2.队头出队并访问
// 3.队头的每个children入队
// 4.重复2、3，直到队列为空
const bfs = (root) => {
    let queue = [root];
    while (queue.length) {
        const n = queue.shift();
        console.log('n: ', n.val);
        n.children.forEach(child => {
            queue.push(child);
        });
    }
};

bfs(tree);