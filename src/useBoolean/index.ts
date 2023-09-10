/*
 * @Author: XiaKeMing xiakeming97@gmail.com
 * @Date: 2023-09-09 15:57:00
 * @LastEditors: XiaKeMing xiakeming97@gmail.com
 * @LastEditTime: 2023-09-10 18:42:36
 * @FilePath: /xhooks/src/useBoolean/index.ts
 * @Description: 优雅的管理 boolean 状态的 Hook。
 * 
 * Copyright (c) 2023 by XIAKEMING, All Rights Reserved. 
 */

import React,{useState} from 'react'

export interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    set: (value: boolean) => void;
    toggle: () => void;
  }

function useBoolean(defaultValue = false):[boolean,Actions] {
    const [newboolean,setNewBoolean] = useState(defaultValue)
    function setTrue():void{
        setNewBoolean(true)
    }
    function setFalse():void{
        setNewBoolean(false)
    } 
    function set(v:boolean):void{
      setNewBoolean(v)
    }
    function toggle():void{
        setNewBoolean(!newboolean)
    }
  return [newboolean,{setTrue,setFalse,set,toggle}]
}

export default useBoolean