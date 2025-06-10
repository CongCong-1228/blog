---
title: "Flutter项目初始化"
date: "2025-06-09"
spoiler: "Flutter项目初始化结构与各文件说明"
---

最近在学习flutter，这里梳理一下相关的知识点做个总结

1. 首先可以在 vsCode 中根据快捷键Command + shift + p 然后搜索 Flutter: new Object来新建一个 Flutter 的项目。

2. 成功新建 Flutter 项目后，我们可以看到目录结构是这样的:

    ```yaml
        flutter_demo/
        ├── android/
        ├── ios/
        ├── lib/
        │   └── main.dart
        ├── test/
        ├── web/ (可选)
        ├── macos/ (可选)
        ├── linux/ (可选)
        ├── windows/ (可选)
        ├── pubspec.yaml
        ├── analysis_options.yaml
        ├── .gitignore
        └── README.md
     ```

    接下来，我们来分析一下Flutter项目的目录结构，来看看每个文件都是用来干嘛的。

    ---

    lib/： 核心目录，绝大多数的Dart 代码都写在这里，默认包含了一个main.dart文件，是整个程序的入口

    ```yaml
        lib/
        ├── main.dart         # 入口文件
        ├── screens/          # 各种页面
        ├── widgets/          # 可复用组件
        ├── models/           # 数据模型
        ├── services/         # 网络请求、数据库等服务层
        ├── providers/        # 状态管理类
        └── utils/            # 工具函数
    ```

    ---

    android/:

    1. 原生Android工程，用于构建Android 应用
    2. 可在其中配置包名，Gradle构建，权限等
    3. 入口是MainActivity.kt或MainActivity.java

    ---

    ios/:

    1. 原生 IOS 工程，用于构建 IOS 应用
    2. 使用 xcode打开，配置info.plist，证书，启动图等
    3. 入口通常是Runner/AppDelegate.swift

    ---

    test/:

    1. 用于编写单元测试
    2. Flutter默认生成一个widget_test.dart示例文件

    ---

    pubspec.yaml

    1. 项目的配置文件，类似于 node.js 的package.json
    2. 管理： 图片，字体等资源， 项目描述和版本信息等

   ```yaml
    dependencies: A new Flutter project.
    flutter:
      sdk: flutter
    provider: ^6.0.0
    english_words: ^4.0.0
   ```

    ---

    analysis_options.yaml

    1. Dart静态代码分析配置文件
    2. 用于规范代码风格，检测潜在错误

    ```yaml
    linter:
      rules:
        always_declare_return_types: true
        prefer_const_constructors: true
    ```

    ---

    web/，macos/，windows/， linux/ 桌面平台的原生项目结构

3. Flutter项目运行生命周期简单示意图

    ```yaml
    main.dart
    ↓
    runApp(MyApp)
    ↓
    构建 Widget 树
    ↓
    显示 UI
    ↓
    用户交互或数据更新
    ↓
    setState / Provider / Riverpod 等触发状态更新
    ↓
    重新构建 Widget（UI 局部刷新）
    ```
