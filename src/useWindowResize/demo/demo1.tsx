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
