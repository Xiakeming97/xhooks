import React,{useState} from 'react'

export interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
  }

function useBoolean(defaultValue = false):[boolean,Actions] {
    const [newboolean,setNewBoolean] = useState(defaultValue)
    function setTrue(){
        setNewBoolean(true)
    }
    function setFalse(){
        setNewBoolean(false)
    } 
    function toggle(){
        setNewBoolean(!newboolean)
    }
  return [newboolean,{setTrue,setFalse,toggle}]
}

export default useBoolean