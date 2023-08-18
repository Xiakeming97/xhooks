/*
 * @Author: XiaKeMing xiakeming97@gmail.com
 * @Date: 2023-08-07 01:26:27
 * @LastEditors: XiaKeMing xiakeming97@gmail.com
 * @LastEditTime: 2023-08-18 16:29:29
 * @FilePath: /xhooks/src/useWindowResize/index.ts
 * @Description: 获取窗口大小
 * 
 * Copyright (c) 2023 by XIAKEMING, All Rights Reserved. 
 */
import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export default function useWindowResize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight, 
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

