import React, { useEffect, useState } from 'react';
import {useUpdateEffect} from "xkm_xhooks"

export default ()=>{
  const [count, setCount] = useState<number>(0);
  const [effectCount, setEffectCount] = useState<number>(0);
  const [updateEffectCount, setUpdateEffectCount] = useState<number>(0);

  useEffect(() => {
    setEffectCount((c:number)=>c+1);
  }, [count]);
  useUpdateEffect(() => {
    setUpdateEffectCount((c:number) => c + 1);
    return () => {
      // do something
    };
  }, [count]); // you can include deps array if necessary
  return (
    <div>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {updateEffectCount}</p>
      <p>
        <button type="button" onClick={() => setCount((c:number) => c + 1)}>
          reRender
        </button>
      </p>
    </div>
  );
}
