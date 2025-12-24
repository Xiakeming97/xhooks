# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述 (Project Overview)

xhooks 是一个高质量的 React Hooks 库，参考 ahooks 设计与实现。项目使用 TypeScript 开发，采用 dumi 作为文档框架，father 作为构建工具。

## 常用命令 (Common Commands)

```bash
# 开发文档预览
npm run dev

# 构建生产版本
npm run build

# 构建文档
npm run docs:build

# 运行测试
npm run test

# 运行单个测试文件
npm run test -- src/useBoolean/__tests__/index.test.ts

# 代码检查
npm run lint

# 提交代码 (使用 commitizen)
npm run commit
```

## 项目结构 (Architecture)

```
src/
├── index.ts           # 主入口，导出所有 hooks
├── utils/             # 工具函数集合
├── useBoolean/        # 管理 boolean 状态的 Hook
├── useUpdateEffect/   # 跳过首次执行的 useEffect
├── useWindowResize/   # 监听窗口大小变化
└── createUpdateEffect/# 创建 useUpdateEffect 的工厂函数
```

每个 Hook 目录包含：
- `index.ts` - Hook 实现
- `__tests__/` - 测试目录

## 代码规范 (Code Style)

- ESLint 配置继承自 `@umijs/lint`
- 使用 Prettier 格式化代码
- 提交信息使用 commitizen，需遵循 commitlint 规范
- 每个 Hook 需要导出类型定义 (如 `Actions` 接口)
