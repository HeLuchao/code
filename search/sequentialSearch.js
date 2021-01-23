/*
 * @Author: heluchao
 * @Date: 2021-01-22 17:51:12
 * @LastEditTime: 2021-01-22 18:05:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/search/sequentialSearch.js
 * 顺序搜索 时间复杂度   O(n) 
 */
const sequentialSearch = (arr, item) => { 
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === item) {
            return index;
        }
    }
    return -1;
};

const arr = [5, 4, 3, 2, 1, 0];
let result = sequentialSearch(arr, 3);
console.log('result: ', result);