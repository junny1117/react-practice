import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log("화면에 나타남");

    return ()=>{
        console.log("컴포넌트 사라짐")
    }//언마운트 될때 진행됨
  }, []);//마운트 최초 1회

  return (
    <div>컴포넌트 클린업 예제</div>
  );
}

export default MyComponent;
