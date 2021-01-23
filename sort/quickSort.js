/*
 * @Author: heluchao
 * @Date: 2021-01-22 17:37:13
 * @LastEditTime: 2021-01-23 11:13:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/sort/quickSort.js
 * 快速排序 
 * 1.在数组中选择一个元素作为基准
 * 2.小于基准的元素放左边集合，大于基准的元素放右边集合
 * 3.左右两个集合，不断重复第1步和第2步，直到所有集合只剩下1个元素为止
 * 时间复杂度   O(nlogn)
 */
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
const arr = [5, 4, 3, 2, 1, 0];
let result = quickSort(arr);
console.log('result: ', result);