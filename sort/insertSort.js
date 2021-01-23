/*
 * @Author: heluchao
 * @Date: 2021-01-22 15:12:59
 * @LastEditTime: 2021-01-22 15:24:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/sort/insertSort.js
 * 插入排序 
 * 从数组第二个元素开始，依次跟当前元素之前的其他元素对比并插入合适位置
 * 时间复杂度（O(n^2)）
 */
const insertSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i];
        let j = i;
        while (j > 0) {
            if (arr[j - 1] > temp) {
                arr[j] = arr[j - 1];
            } else {
                break;
            }
            j -= 1;
        }
        arr[j] = temp;
    }
    return arr;
};

const arr = [5, 4, 3, 2, 1, 0];
let result = insertSort(arr);
console.log('result: ', result);