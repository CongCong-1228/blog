---
title: "最近面试总结"
date: "2025-07-11"
spoiler: "面试主要还是考察 js 的基本功，以及一些场景题，这里做一下简单的总结和不足的地方"
---

#### 1. 大文件上传会遇到的问题

- 大文件上传超时/中断
- 上传失败无法断点续传
- 前端 ui 卡顿问题
- 后端存储压力大

##### 解决方案

- 使用 slice 将大文件按固定大小进行分片，每片生成一个请求，独立进行，所有切片上传完成后，通知后端合并
- 使用 Promise.all或Promise.allSettled控制并发上传，可重试失败的分片
- 支持断点续传（基于文件 hash和上传状态记录），上传前使用 md5 对文件 计算hash，（使用 web worker避免主线程卡顿）
- 后端通过查询该 hash下已上传的chunk索引来判断，前端跳过已上传的部分
- 避免重复上传相同文件（秒传）
- 前端 ui优化+错误提示

#### 2. js 是单线程语言，如何做到多线程

只有了解过 js 可以通过 web worker 做多线程，先做一个总结，但是没有实际的应用经验，下面会写一个 demo 做个尝试

##### 什么是 web worker?

- web worker是浏览器提供的 api，用于在后台线程中运行脚本，从而提升主线程的响应能力

##### 主要特点

- Worker 运行在独立线程中，不阻塞主线程
- 与主线程之间通过postMessage 通信
- 无法访问 DOM 和window 对象
- 适合处理CPU 密集任务
- 与主线程之间的通信是异步的

```javascript
// main.js
const worker = new Worker('worker.js')
const data = Array.from({ length: 100000 }, () => Math.random())

// 传递数据
worker.postMessage(data)

// 接受消息
worker.onmessage = (event) => {
    console.log(event.data)
}

// 错误
worker.onerror = (event) => {
    console.log(event)
}


// worker.js
self.onmessage = (event) => {
    const arr = event.data
    const sum = arr.reduce((acc, cur) => acc + cur, 0)

    // 将数据返回给主线程
    self.postMessage(sum)
}
```

###### Worker 中可用的 API（部分）

- fetch xhr
- setTimeOut setInterval
- 存储

