---
title: "react 面试知识点总结"
date: "2025-07-14"
spoiler: "总结一下 react常问到的一些面试知识点"
---


#### 1. React 组件通信方式

- 通过props向子组件传递数据
- 通过回调函数向父组件传递数据
- 使用 refs调用子组件暴露的方法

```javascript
    import React, { useRef, forwardRef, useImperativeHandle } from 'react'

    // 子组件
    const Child = forwardRef((props, ref) => {
        // 暴露方法给父组件
        useImperativeHandle(ref, () => ({
            sayHello() {
                alert('Hello from Child Component')
            }
        }))

        return <div>Child Component</div>
    })

    // Parent
    const childRef = useRef(null)
    const handleClick = () => {
        if (childRef.current) {
            childRef.current.sayHello()
        }
    }

    return (
        <div>
            <Child ref={childRef} />
            <button onClick={handleClick}>Call Child method</button>
        </div>
    )
```

- 通过Context进行跨组件通信
- 使用状态管理库进行通信(redux, mbox, zustand)

#### 2. React 有哪些内置 Hooks ？

- useState: 用于在函数组件中添加局部状态
- useReducer: 用于管理复杂的状态逻辑，类似于 Redux 的 reducer
- useEffect: 用于在函数组件中执行副作用操作（如数据获取、订阅、手动 DOM 操作等）异步进行
- useLayoutEffect: 与 useEffect 类似，但在 DOM 更新后同步执行，适用于需要直接操作 DOM 的场景，同步进行
- useContext: 用于访问 React 的上下文（Context）
- useRef: 用于创建一个可变的引用对象，通常用于访问 DOM 元素或存储可变值
- useMemo: 用于计算缓存结果，避免在每次渲染时都重新计算
- useCallback：用于缓存回调函数，避免每次渲染时都创建新的回调
- useImperativeHandle: 用于自定义暴露给父组件的实例值，通常与 forwardRef 一起使用

#### 3.React 项目可做哪些性能优化？

- useMemo: 用于计算昂贵的计算结果，避免在每次渲染时重复计算
- useCallback: 用于缓存回调函数，避免在每次渲染时创建新的函数实例
- React.memo: 是一个高阶组件，用于缓存组件的渲染结果，避免在 props 未变化时重新渲染

```javascript
  const MyComponent = React.memo(({ value }) => {
  console.log('MyComponent rendered')
  return <div>{value}</div>
})

function ParentComponent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MyComponent value="Hello" /> {/* 不会因 count 变化而重新渲染 */}
    </div>
  )
}
```

#### 4. 为什么说 react 数据是不可变的？

##### 1. 什么是不可变数据？

不可变数据是指对数据的修改不会改变原数据本身，而是返回一个新的副本

##### 2. 高效的 diff 算法需要

React每次组件更新时都会执行“浅比较”（比较引用的地址），来判断状态是否变化

##### 话术

在 React 中我们强调“数据不可变”，是为了配合其虚拟 DOM 的高效 diff 算法。React 通过浅比较来判断状态是否变化，因此我们每次更新 state 时应返回一个新的对象或数组。如果直接修改原始数据，React 可能无法检测到变化，从而跳过更新。这会导致 UI 不一致或 Bug。因此，在实际开发中我始终使用不可变的方式更新状态，比如使用 ... 展开符、map 或借助 immer

#### 5. useEffect 和 useLayoutEffect 的区别

##### 1. 执行时机

- useEffect是在浏览器绘制完成后异步执行
- useLayoutEffect是在DOM更新之后，但是在浏览器绘制之前执行

##### 2. 使用场景

- useEffect 适用于大多数副作用操作，如数据获取，订阅，手动 dom 操作等，因为这些操作通常不需要阻塞浏览器的渲染
- useLayout 适用于需要在浏览器绘制前的同步操作，如测量 dom元素，同步更新 dom 等

##### 3. 总结

- useEffect：异步执行，不阻塞渲染，适合大多数副作用操作
- useLayoutEffect：同步执行，阻塞渲染，适合需要在绘制前同步完成的副作用操作


