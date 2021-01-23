/*
 * @Author: heluchao
 * @Date: 2021-01-22 11:04:27
 * @LastEditTime: 2021-01-22 11:14:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/sort/bubbleSort.js
 * 冒泡排序     时间复杂度（O(n^2)）
 */
const bubbleSort = (arr) => { 
    for (let i = 0; i<arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j+ 1];
                arr[j +1] = temp;
            }
        }
    }
    return arr;
};

const arr = [5,4,3,2,1,0];
let result = bubbleSort(arr);
console.log('result: ', result);