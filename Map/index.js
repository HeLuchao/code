/*
 * @Author:heluchao
 * @Date: 2021-01-20 17:48:24
 * @LastEditTime: 2021-01-20 17:53:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/Map/index.js
 */

 let map = new Map();

 //add
 map.set('a', 'aa');
 map.set('b', 'bb');
 map.set('c', 'cc');
 console.log('map: ', map);

 //delete / clear
map.delete('c');
// map.clear();
console.log('map: ', map);

//update
map.set('a', 'aaaaa');
console.log('map: ', map);

 //get
 let get = map.get('a');
 console.log('get: ', get);