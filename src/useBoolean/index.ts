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