import React, { useState } from 'react';

// 컴포넌트 props가 새롭게 전달되었을 때 랜더링 된다. 
// 상태변수가 갱신되었을 때 랜더링 된다. 

function UseStateEx01() {
  // 상태 변수 선언 = useState
  const [counter, setCounter] = useState(0);
  // 컴포넌트 내부변수 count 선언  
  let count = 0; //컴포넌트가 랜더링될때마다 초기화

//지역변수 증가함수
  const varIncrease = () => {
    count = count + 1;
    console.log("count:", count);
  }
//상태변수 증가 함수
  const stateIncrease = () => {
    setCounter(counter + 1);
    console.log("counter:", counter);
  }

  return (
    <div>
      <h1>훅함수: useState 예시</h1>
      <p>지역변수(let): {count}</p>
      <button onClick={varIncrease}>count 증가 </button>
      <p>상태변수: {counter}</p>
      <button onClick={stateIncrease}>counter 증가 </button>
    </div>
  );
}

export default UseStateEx01;
