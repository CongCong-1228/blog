---
title: "Flutter中的StatelessWidget 和 StatefulWidget"
date: "2025-06-10"
spoiler: "Flutter 中的组件分为两大类：StatelessWidget（无状态组件）和StatefulWidget（有状态组件）。理解它们的核心区别，是掌握 Flutter 构建 UI 的关键一步"
---

## 深入理解 Flutter 中的 StatelessWidget 和 StatefulWidget

Flutter 中的组件分为两大类：**StatelessWidget（无状态组件）** 和 **StatefulWidget（有状态组件）**。理解它们的核心区别，是掌握 Flutter 构建 UI 的关键一步。

---

### 📌 一、核心区别概述

| 特性 | StatelessWidget | StatefulWidget |
|------|------------------|----------------|
| 是否可变 | ❌ 不可变 | ✅ 可变（有状态） |
| 是否持久保存状态 | ❌ 不保存 | ✅ 保存并响应更新 |
| 状态变更是否自动重建 | ❌ 不会 | ✅ 会（调用 setState） |
| 用途 | 显示静态内容 | 需要用户交互或数据变化的组件 |

---

### 🧠 二、内部机制区别

#### StatelessWidget

- 构造后不可更改。
- 一旦需要改变 UI，必须整体重新创建该 Widget 实例。
- 适用于显示文字、图标、按钮等静态 UI。

```dart
class ProfileCard extends StatelessWidget {
    final String username;
    final int age;
    final String location;

    const ProfileCard({
        super.key,
        required this.username,
        required this.age,
        required this.location,
    });

    @overwrite
    Widget build(BuildContext context) {
        return Card(
        margin: const EdgeInsets.all(16.0),
        child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
                Text(
                'Name: $widget.name',
                style: Theme.of(context).textTheme.titleLarge,
                ),
                const SizedBox(height: 8.0),
                Text(
                'Age: $widget.age',
                style: Theme.of(context).textTheme.titleMedium,
                ),
                const SizedBox(height: 8.0),
                Text(
                'Location: $widget.location',
                style: Theme.of(context).textTheme.titleSmall,
                ),
              ],
            ),
          ),
        );
      }


    // 调用
    ProfileCard(username: 'Cong Cong', age: 26, location: '杭州')
```

#### StatefulWidget

- 拆分成两部分
  - StatefulWidget 类本身不可变
  - State 类持有可变状态
- 状态变化时，会调用 setState() 触发 UI 重建，但原始 State 实例保持不变。

```dart
class CounterBox extends StatefulWidget {
  final void Function(int val) onTap;

  const CounterBox({super.key, required this.onTap});

  @override
  _CounterBoxState createState() => _CounterBoxState();
}

class _CounterBoxState extends State<CounterBox> {
  int _count = 0;

  void _increment() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_count'),
        ElevatedButton(
          onPressed: () => {
            widget.onTap(1),
            _increment()
          },
          child: Text('Increment'),
        )
      ],
    );
  }
}
```

---

### 🧠 三、总结

- 使用 StatelessWidget，当 UI 和数据不会变。
- 使用 StatefulWidget，当 UI 依赖用户交互或异步事件。
- StatefulWidget 拆分了“描述 UI”与“管理状态”的职责。
- 尽可能使用 StatelessWidget，提高性能和可维护性。

---

### 📘 附加：推荐阅读

- [Flutter 官方文档：Managing State](https://docs.flutter.dev/data-and-backend/state-mgmt/intro)
- [Flutter 中 setState 的原理详解](https://flutter.cn/docs/development/ui/interactive)
