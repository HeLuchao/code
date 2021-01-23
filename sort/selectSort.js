/*
 * @Author: heluchao
 * @Date: 2021-01-22 14:40:50
 * @LastEditTime: 2021-01-22 15:09:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/sort/selectSort.js
 * 选择排序
 * 不断地选择剩余元素之中的最小者。时间复杂度（O(n^2)）
 */
const selectSort = (arr) => {
    for (let i = 0; i < arr.length - 1 ; i++) {
        let min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                let temp = min;
                min = arr[j];
                arr[j] = temp;
            }
        }
        arr[i] = min;
    }
    return arr;
};

const arr = [5,4,3,2,1,0];
let result = selectSort(arr);
console.log('result: ', result);