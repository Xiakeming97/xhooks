# xhooks 项目概述

## 项目简介

xhooks 是一个高质量、可靠的 React Hooks 库，参考 ahooks 设计与实现。使用 TypeScript 开发，提供类型完善的 Hooks 工具集。

- **作者**: XiaKeMing (xiakeming97@gmail.com)
- **仓库**: https://github.com/Xiakeming97/xhooks
- **版本**: 0.0.2
- **许可证**: MIT

## 技术栈

| 技术 | 用途 |
|------|------|
| React 18 | UI 框架 |
| TypeScript | 类型系统 |
| Jest + Testing Library | 测试框架 |
| dumi | 文档框架 |
| father | 构建工具 |
| ESLint + Prettier | 代码规范 |
| commitizen + commitlint | 提交规范 |

## 现有 Hooks

### 1. useBoolean
管理 boolean 状态的 Hook，提供切换、设置 true/false 等方法。

```typescript
import useBoolean from 'xkm_xhooks/useBoolean';

const [state, { setTrue, setFalse, set, toggle }] = useBoolean(false);
```

**类型定义**:
```typescript
interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  set: (value: boolean) => void;
  toggle: () => void;
}
```

### 2. useUpdateEffect
跳过首次执行的 useEffect，行为类似于 useEffect 但不执行首次回调。

```typescript
import useUpdateEffect from 'xkm_xhooks/useUpdateEffect';

useUpdateEffect(() => {
  console.log('只在依赖更新时执行');
}, [dep]);
```

**实现原理**: 通过 `createUpdateEffect` 工厂函数创建，使用 `useRef` 标记首次挂载状态。

### 3. useWindowResize
监听窗口大小变化，返回当前窗口尺寸。

```typescript
import useWindowResize from 'xkm_xhooks/useWindowResize';

const { width, height } = useWindowResize();
```

**类型定义**:
```typescript
interface WindowSize {
  width: number;
  height: number;
}
```

### 4. createUpdateEffect
工厂函数，用于创建跳过首次执行的 Effect Hook，可用于创建 useLayoutEffect 的变体。

```typescript
import createUpdateEffect from 'xkm_xhooks/createUpdateEffect';

const useUpdateEffect = createUpdateEffect(useEffect);
const useUpdateLayoutEffect = createUpdateEffect(useLayoutEffect);
```

## 工具函数

`src/utils/index.ts` 提供以下类型判断工具：

| 函数 | 用途 |
|------|------|
| `isObject` | 判断是否为对象 |
| `isFunction` | 判断是否为函数 |
| `isString` | 判断是否为字符串 |
| `isBoolean` | 判断是否为布尔值 |
| `isNumber` | 判断是否为数字 |
| `isUndef` | 判断是否为 undefined |

## 项目结构

```
xhooks/
├── src/
│   ├── index.ts              # 主入口，统一导出
│   ├── utils/                # 工具函数
│   ├── useBoolean/           # boolean 状态管理
│   ├── useUpdateEffect/      # 跳过首次的 effect
│   ├── useWindowResize/      # 窗口尺寸监听
│   └── createUpdateEffect/   # effect 工厂函数
├── .dumi/                    # dumi 文档配置
├── dist/                     # 构建输出
├── jest.config.ts            # Jest 配置
├── tsconfig.json             # TypeScript 配置
└── package.json
```

## 开发规范

### Hook 模板

每个 Hook 应包含：
1. `index.ts` - Hook 实现，导出默认导出和类型定义
2. `__tests__/` - 测试目录，包含 `index.test.ts`

### 注释规范

文件头部需包含以下注释模板：

```typescript
/*
 * @Author: XiaKeMing xiakeming97@gmail.com
 * @Date: YYYY-MM-DD HH:mm:ss
 * @LastEditors: XiaKeMing
 * @LastEditTime: YYYY-MM-DD HH:mm:ss
 * @FilePath: /xhooks/xxx
 * @Description: 功能描述
 *
 * Copyright (c) 2023 by XIAKEMING, All Rights Reserved.
 */
```

### 路径别名

配置了路径别名 `xkm_xhooks/*`，方便内部引用：

```typescript
import useBoolean from 'xkm_xhooks/useBoolean';
```

## 构建与发布

- 构建输出到 `dist/` 目录
- 产物包含 `index.js` 和 `index.d.ts`
- 发布到 npm registry，依赖项为 `react >=16.9.0`
