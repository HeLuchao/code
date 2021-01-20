/*
 * @Author: heluchao
 * @Date: 2021-01-20 15:47:37
 * @LastEditTime: 2021-01-20 15:50:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/queue/index.js
 * javascript 模拟队列  先进先出
 */

const queue = [];

queue.push(1);
queue.push(2);

const item1 = queue.shift();
const item2 = queue.shift();
