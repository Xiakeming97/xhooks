import { renderHook } from '@testing-library/react';
import  useUpdateEffect from '../index';

describe('useUpdateEffect', () => {
  it("test on mounted",()=>{
    let mountedState = 1;
    const hook = renderHook(()=>{
      useUpdateEffect(()=>{
        mountedState = 2;
      })
    })
    expect(mountedState).toBe(1);
    hook.rerender();
    expect(mountedState).toBe(2);
  })
  it("test on update",()=>{
    let updateState = 1;
    const hook = renderHook(()=>{
      useUpdateEffect(()=>{
        updateState = 3;
      },[updateState])
    })
    expect(updateState).toBe(1);
    hook.rerender();
    expect(updateState).toBe(1);
    updateState = 2;
    hook.rerender();
    expect(updateState).toBe(3);
  })
})