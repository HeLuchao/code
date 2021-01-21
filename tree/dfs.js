/*
 * @Author: heluchao
 * @Date: 2021-01-21 15:04:28
 * @LastEditTime: 2021-01-21 15:31:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/tree/dfs.js
 * 树结构的深度优先遍历
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

//1.先访问根节点    2.对根节点每个children进行深度优先遍历
const dfs = (root) => {
    console.log('root: ', root.val);
    root.children.forEach(item => {
        dfs(item);
    });
};

dfs(tree);