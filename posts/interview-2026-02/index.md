---
title: "最近面试总结"
date: "2026-02-13"
spoiler: "面试主要考察了基础知识，vue 和 react 深入一些的框架知识，以及一些 ts 知识（答得不好）"
---

#### 1. TypeScript 中interface 和 typeof 的区别？

- interface 是用来声明对象结构的类型定义关键字，它只存在于类型层，常用于定义契约和可扩展结构
- typeof 在 TypeScript 中可以用于类型查询，它是从一个已存在的值推导出类型，常用于保持类型与实际对象同步
- 简单来说，interface 是主动定义类型结构，而 typeof 是从值反推类型，两者属于不同维度的能力

#### 2. useEffect和useLayoutEffect的区别是什么？

- useEffect 和 useLayoutEffect 的核心区别在于执行时机
- useLayoutEffect 在 DOM 更新后、浏览器绘制前同步执行，会阻塞渲染，适合读取或同步修改 DOM 布局
- useEffect 在浏览器绘制完成后异步执行，不会阻塞 UI，更适合处理网络请求、订阅等副作用
- 只有在涉及布局测量或避免闪烁时才使用 useLayoutEffect

#### 3. react常用的 hooks 有哪些？

- 状态类如 useState、useReducer，用于管理组件状态；
- 副作用类如 useEffect、useLayoutEffect，用于处理副作用和 DOM 相关逻辑；
- 性能优化类如 useMemo、useCallback，用于减少不必要的计算和渲染；

  ###### 追问

    1. 为什么 Hooks 不能写在条件或循环里?
       - React 内部通过 Fiber 的 memoizedState 链表来存储 Hooks，每个 Hook 都按调用顺序依次挂载。在重新渲染时，React 依赖相同的调用顺序去匹配之前的 Hook 节点。如果将 Hooks 写在条件或循环中，可能导致调用顺序发生变化，从而造成状态错位或副作用错乱，因此必须保证 Hooks 在组件顶层按固定顺序执行
    2. useRef 和 useState 的区别是什么？
       - useState 用于管理会影响 UI 的状态，更新会触发重新渲染； 存储在 fiber的 hooks链表中，每次 setState 会触发一次调度，参与 diff 过程，它是“驱动视图更新”的状态容器。
       - useRef 用于保存可变数据或 DOM 引用，更新不会触发重新渲染。也存储在 hooks 链表中，返回的是一个固定对象。修改 ref.current 不会触发重新渲染，因此适合存储定时器、上一次值或解决闭包问题等场景
       - useRef 和普通变量有什么区别？ 变量在每次 render 时都会重新初始化。 ref 对象在整个生命周期内是同一个引用
    3. useMemo和useCallback的区别是什么？
       - useMemo和useCallback都用于缓存，核心目的是在依赖不变的情况下保持引用稳定。
       - useMemo 缓存的是函数的执行结果，而 useCallback 缓存的是函数本身。
       - 从实现上看，useCallback 本质是 useMemo 的语法糖。
       - useCallback通常搭配React.memo一起使用，作为 props 传递给子组件，这两个通常要一起使用，

#### 4. react受控组件和非受控组件是什么，有什么区别?

- 受控组件指的是表单的值由 react state 完全控制，用户触发onChange来更新 state，UI 始终与 state 同步
- 非受控组件指的是表单的值由 **dom**自身维护，react 不直接干预，通常由 ref 来读取或操作值(file)
- 使用受控组件的好处是便于统一管理和验证表单数据，而非受控组件适合不需要频繁渲染或初始化一次的场景

#### 5. 可以说说 react fiber 架构吗？ React fiber 架构改善了什么问题？

- Fiber是 React 16 之后引入的底层重写架构，它的目标是让 React的渲染可中断，更灵活，更高效
- React 16之前渲染的逻辑是使用递归遍历组件树进行 render（深度优先遍历），一次更新必须全部完成，不可中断，容易导致 UI 阻塞
- Fiber改善了这些问题：
  - 将渲染拆分成多个 fiber单元，可以中断渲染，先处理高优先级任务
  - 引入任务优先级和调度机制，可暂停，恢复或丢弃低优先级任务
  - 分离 render阶段和 commit 阶段
    - render 阶段：
      - （1）生成 Fiber 树
      - （2）计算每个节点的更新
      - （3）可以被中断或暂停
      - （4）纯计算阶段（不修改 DOM）
    - commit 阶段：
      - （1）将 Fiber上的变更同步到 DOM
      - （2）不可中断，保证一致性

#### 6. react中父组件怎么调用子组件的方法？

- 函数组件中使用 forwardRef + useImperativeHandle 暴露方法给父组件，通过 ref.current 调用
- 类组件通过 ref 获取实例，直接调用实例方法；
- 如果只是通知父组件事件，可以通过 props 回调方式（单向数据流）；
