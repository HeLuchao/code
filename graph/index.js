/*
 * @Author: heluchao
 * @Date: 2021-01-21 18:34:43
 * @LastEditTime: 2021-01-21 19:19:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/graph/index.js
 * JavaScript实现图数据结构
 */
const graph = {
    0: [1, 2],
    1: [ 2, 3],
    2: [0, 2],
    3: [0, 3],
};

//深度优先遍历：根节点 -> 没访问过的相邻节点
const visited = new Set();
const dfs = (n) => { 
    console.log('n: ', n);
    visited.add(n);
    graph[n].forEach(c => {
        if (!visited.has(c)) {
            dfs(c);
        }
    });
};

//广度优先遍历
//新建队列，根节点入队，队头出队并访问，队头没访问过的相邻节点入队，
// 重复直到队列为空
const visited = new Set();
visited.add(2);
const q = [2];

while (q.length) {
    const n = q.shift();
    console.log('n: ', n);
    graph[n].forEach(c => {
        if (!visited.has(c)) {
            q.push(c);
            visited.add(n);
        }
    });
}