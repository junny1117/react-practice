import React, { useState, useEffect } from 'react';

const UseEffect01 = () => {
  const [count, setCount] = useState(0);

  // 랜더링될때마다 호출되는 useEffect() 의존성배열을 표기하지 않는다.
  useEffect(() => {
    console.log(`count: ${count}`);
  });

  const increase = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={increase}>UP</button>
    </div>
  );
}

export default UseEffect01;
