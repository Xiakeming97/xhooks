/**
 * title: 基础用法
 * desc: 用于获取窗口大小变化。
 */

import React from 'react';
import { useWindowResize } from 'xkm_xhooks';

export default () => {
  const windowSize = useWindowResize();

  return (
    <div>
      <h1>Window Size:</h1>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
};
