/*
 * @Author: your name
 * @Date: 2020-11-12 16:55:22
 * @LastEditTime: 2020-12-02 15:06:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\Scheduler.js
 * 并发任务限制
 */
class Scheduler {
    constructor(maxNum) {
        this.taskList = [];
        this.count = 0;
        this.maxNum = maxNum;
    }

    async add(promiseCreator) {
        if (this.count >= this.maxNum) {
            await new Promise(resolve => {
                this.taskList.push(resolve);
            });
        }
        this.count++;
        const result = await promiseCreator();
        this.count--;
        if (this.taskList.length > 0) {
            this.taskList.shift();
        }
        return result;
    };
};

const timeout = time => {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
};

const scheduler = new Scheduler(1);

const addTask = (time, value) => {
    scheduler.add(() => {
        return timeout(time).then(() => {
            console.log('value: ', value);
        });
    });
};


addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");