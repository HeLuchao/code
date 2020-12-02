/*
 * @Author: your name
 * @Date: 2020-12-02 15:07:37
 * @LastEditTime: 2020-12-02 16:43:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\Observer.js
 */

//简易版
//  var publisher = {};
//  publisher.list = [];

//  publisher.listen = (fn) => {
//     publisher.list.push(fn);
//  }

//  publisher.trigger = () => {
//     for (let i = 0; i < this.list.length; i++) {
//       this.list[i].apply(this, arguments);
//     }
//  }

//  基于发布订阅者模式的EventBus
class EventBus {
    constructor() {
        this.listeners = {};
    }
    on(type, cb) {
        if (!this.listeners.type) {
            this.listeners.type = [];
        }
        this.listeners.type.push(cb);
    }
    emit(type, ...args) {
        if (this.listeners.type) {
            this.listeners.type.forEach(cb => {
                cb(...args);
            });
        }
    }
    off(type, cb) {
        if (this.listeners.type) {
            const temIndex = this.listeners.type.findIndex(item => item === cb);
            if (temIndex !== -1) {
                this.listeners.type.splice(temIndex, 1);
            }
            if (this.listeners.type.length === 0) {
                delete this.listeners.type;
            }
        }
    }

    offAll(type) {
        if (this.listeners.type) {
            delete this.listeners.type;
        }
    }
}

const  event = new EventBus();
event.on('say', () => {console.log('say on')});
event.emit('say');

event.on('say', () => {console.log('say on')});
event.emit('say');


//观察者模式
class Observer {
    constructor(cb) {
        if (typeof cb === 'function') {
            this.cb = cb;
        } else {
            throw new Error('must be function')
        }
    }

    update() {
        this.cb();
    }
}

class Dep {
    constructor() {
        this.observerList = [];
    }
    addObserver(observer) {
        this.observerList.push(observer);
    }
    notify() {
        this.observerList.forEach(observer => { observer.update(); })
    }
}

const callBack = () => { console.log('notify 123') };

const observer = new Observer(callBack);

const dep = new Dep();

dep.addObserver(observer);
dep.notify();