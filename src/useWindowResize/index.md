---
group:
  title: Dom
  order: 4
title: useWindowResize
---

# useWindowResize

用于获取窗口大小变化的自定义 Hook。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" ></code>

## API

```typescript
const windowSize = useWindowResize();
```

### Result

| 参数       | 说明             | 类型         |
| ---------- | ---------------- | ------------ |
| windowSize | 窗口大小数据对象 | `WindowSize` |

### WindowSize

| 参数   | 说明   | 类型     |
| ------ | ------ | -------- |
| width  | 窗口宽 | `number` |
| height | 窗口高 | `number` |
