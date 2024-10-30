import React, { useRef, useState, useEffect } from 'react';

function UseRef() {
    const [name, setName] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        console.log(inputRef.current);
    }, []);

    const focusInput = () => {
        inputRef.current.focus();
        alert(`welcome, ${name}!`);
    };

    return (
        <div>
            <p>useRef 함수는 DOM 요소에 직접 접근 가능</p>
            <p>포커싱 구현</p>
            <input
                type='text'
                value={name}
                placeholder='이름 입력'
                ref={inputRef}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={focusInput}>로그인</button>
        </div>
    );
}

export default UseRef;
