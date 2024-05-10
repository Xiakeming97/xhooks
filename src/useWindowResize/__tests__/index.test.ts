/*
 * @Author: XiaKeMing xiakeming97@gmail.com
 * @Date: 2023-09-11 19:29:01
 * @LastEditors: XiaKeMing xiakeming97@gmail.com
 * @LastEditTime: 2023-09-11 19:38:52
 * @FilePath: /xhooks/src/useWindowResize/__tests__/index.test.ts
 * @Description: useWindowResize测试文件
 *
 * Copyright (c) 2023 by XIAKEMING, All Rights Reserved.
 */
import { act, renderHook } from '@testing-library/react';
import useWindowResize from '../index';

describe('useWindowResize', () => {
  beforeEach(() => {
    // 模拟 window.innerWidth 和 window.innerHeight
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 800, // 初始宽度
    });

    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 600, // 初始高度
    });
  });

  it('should return the window size', () => {
    const { result } = renderHook(() => useWindowResize());

    expect(result.current).toEqual({ width: 800, height: 600 });

    // 模拟窗口大小更改，例如：宽度变为 1000，高度变为 700
    act(() => {
      window.innerWidth = 1000;
      window.innerHeight = 700;
      // 触发 resize 事件以更新 windowSize
      window.dispatchEvent(new Event('resize'));
    });

    // 检查是否返回了更新后的窗口大小
    expect(result.current).toEqual({ width: 1000, height: 700 });
  });
});
