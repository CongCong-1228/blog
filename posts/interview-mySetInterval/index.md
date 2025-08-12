---
title: "面试总结-手写题"
date: "2025-08-08"
spoiler: " 如何利用 setTimeout 实现 setInterval"
---

### 最近面试的时候遇到了需要写笔试题的，因为一直以来准备面试没有准备过笔试题，也没有刷过题，所以感觉答的不好，这里记录一下。

1. 使用 setTimeout 实现 mySetInterval 和 clearMyInterval

    当时一听到要写笔试的时候人有点懵，一下子也没有思路，整个人有点乱，现在冷静下来分析，觉得难度其实也还行
    1. 首先要分析如何使用这个方法，然后确定入参和出参返回值等
    2. 比如我们平常使用 setInterval 一般是这样使用的
   ```typescript jsx
        const timerId = mySetInterval(() => {
            console.log('aaa')
        }, 1000)
        clearMyInterval(timerId)
    ```
    所以需要接受一个回调函数和一个时间，同时clearMyInterval需要接收一个 id
    3. 我们都知道 setTimeout是一个时间后执行一次，要想实现每秒执行一次的功能，那就需要递归调用 setTimeout
    4. 同时我们的mySetInterval需要返回一个唯一的 id，方便 clearMyInterval使用删除它，既然有 key 了，那么我们如何通过 key 找到这个 setTimeout 并清除它呢，需要用一个 map 去存储这个键值对
    5. 在函数的实现中，key 对应的 setTimeout的 timerId 一直在被覆盖，所以我们只需要清除最后一个 setTimeout 的 id 就可以了

    代码如下所示

```typescript jsx
    let key = 0
    const map = new Map()
    function mySetInterval(callback, delay) {
    function cycle() {
            const timerId = setTimeout(() => {
                callback()
                cycle()
            }, delay)
            map.set(key, timerId)
        }
        key++
        cycle()
        return key
    }
    
    function clearMyInterval(timerId) {
        const timeId = map.get(timerId)
        clearTimeout(timeId)
        map.delete(timerId)
    }
```
