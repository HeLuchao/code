/*
 * @Author: heluchao
 * @Date: 2021-01-19 15:51:22
 * @LastEditTime: 2021-01-19 18:00:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /code/Promise.js
 */

 const  PENDING = 'PENDING';
 const FULFILLED = 'FULFILLED';
 const REJECTED = 'REJECTED';

 function solution(result, curVal, resolve, reject) {
    if (result === curVal) {
        throw new Error('循环引用');
    }
    //处理Promise对象
    if (curVal instanceof myPromise) {
        if (curVal.state === PENDING) {
            curVal.then(r => {
                solution(result, curVal, resolve, reject);
                resolve(r);
            }, reject);
        } else {
            curVal.state === FULFILLED && resolve(curVal.value);
            curVal.state === REJECTED && reject(curVal.value);
        }
    }
    //处理thenable对象
    if ((typeof curVal === 'object' || typeof curVal === 'function' ) && curVal !== null) {
        if (typeof curVal.then === 'function' ) {
            curVal.then(r => {
                solution(result, curVal, resolve, reject);
                resolve(r);
            }, reject);
        } else {
            resolve(curVal);
        }
    } else {
        resolve(curVal);
    }
 }

class myPromise {
    static all (promiseArray) {
        return new myPromise((resolve, reject) => {
            const resultArr = [];
            let successNum  = 0;

            function processResult (index, data) {
                resultArr[index] = data;
                successNum++;
                if (successNum === promiseArray.length) {
                    //success
                    resolve(promiseArray);
                }
            }

            for (let index = 0; index < promiseArray.length; index++) {
                const element = promiseArray[index];
                element.then(data => {
                    processResult(index, data)
                }, err => {
                    //err
                    reject(err);
                });
            }
        });
    }
    constructor(fn) {
        this.state = PENDING;//fulFiled、rejected、pending
        this.value = undefined;
        this.resolvedCallBack = [];
        this.rejectedCallBack = [];


        const resolve = (val) => {
            if ((typeof val === 'object' || typeof val === 'function') && val.then) {
                solution(this, val, resolve, reject);
                return;
            }
            setTimeout(() => {
                if (this.state === PENDING) {
                    this.state = FULFILLED;
                    this.value = val;
                    //执行所有的then方法
                    this.resolvedCallBack.map(fn => fn());
                }
            });
        };
        const reject = (val) => {
            if ((typeof val === 'object' || typeof val === 'function') && val.then) {
                solution(this, val, resolve, reject);
                return;
            }
            setTimeout(() => {
                if (this.state === PENDING) {
                    this.state = REJECTED;
                    this.value = val;
                    //执行所有的then方法
                    this.rejectedCallBack.map(fn => fn());
                }
            });
        };
        fn(resolve, reject);
    };

    then(onFulFilled = val => val, onRejected = err => {
        throw new Error(err);
    }){
        let result = null;
        //已完成
        if (this.state === FULFILLED) {
            result = new myPromise((resolve, reject) => {
                const curVal = onFulFilled(this.value);
                solution(result,curVal, resolve, reject);
            });
        }
        
        //已完成
        if (this.state === REJECTED) {
            result = new myPromise((resolve, reject) => {
                const curVal = onFulFilled(this.value);
                solution(result,curVal, resolve, reject);
            });
        }

        //未完成
        if (this.state === PENDING) {
            result = new myPromise((resolve, reject) => {
                this.resolvedCallBack.push(() => {
                    const curVal = onFulFilled(this.value);
                    solution(result,curVal, resolve, reject);
                });

                this.rejectedCallBack.push(() => {
                    const curVal = onRejected(this.value);
                    solution(result,curVal, resolve, reject);
                });
            });
        }

        return result;
    };
};


const promise = new myPromise((resolve, reject)=>{
    setTimeout(() => {
        resolve('data');
        resolve('data2');
    }, 1000);
 }).then((data) => {
    console.log('get', data);
    return 'str';
 })
 .then((data) => {
    console.log('get2', data);
 })