/*
 * @Author: XiaKeMing xiakeming97@gmail.com
 * @Date: 2024-05-10 11:57:54
 * @LastEditors: XiaKeMing xiakeming97@gmail.com
 * @LastEditTime: 2024-05-10 13:47:15
 * @FilePath: /xhooks/src/createUpdateEffect/index.ts
 * @Description: createUpdateEffect
 * 
 * Copyright (c) 2024 by XIAKEMING, All Rights Reserved. 
 */
import { useRef } from 'react';
import type { useEffect, useLayoutEffect } from 'react';

type EffectHookType = typeof useEffect | typeof useLayoutEffect;

function createUpdateEffect(hook:EffectHookType){
  return (
    effect: React.EffectCallback,
    deps?: React.DependencyList,
  ): void => {
    const isInitialMount = useRef(true);

    hook(() => {
      return () => {
        isInitialMount.current = false;
      };
    }, []);

    hook(() => {
      if (!isInitialMount.current) {
        return effect();
      }
      isInitialMount.current = false;
    }, deps);
  };
}

export default createUpdateEffect;
