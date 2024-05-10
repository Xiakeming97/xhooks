/*
 * @Author: XiaKeMing xiakeming97@gmail.com
 * @Date: 2024-05-10 11:27:48
 * @LastEditors: XiaKeMing xiakeming97@gmail.com
 * @LastEditTime: 2024-05-10 13:45:42
 * @FilePath: /xhooks/src/useUpdateEffect/index.ts
 * @Description: useUpdateEffect
 * 
 * Copyright (c) 2024 by XIAKEMING, All Rights Reserved. 
 */
import { useEffect} from 'react';
import createUpdateEffect from '../createUpdateEffect'

const useUpdateEffect = createUpdateEffect(useEffect);

export default useUpdateEffect;