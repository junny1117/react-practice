import React, { useRef, useState } from 'react';

function UseRef() {
    const countRef = useRef(0);
    const [cnt, setCnt] = useState(0);

    const increase = () => {
        countRef.current += 1;
        console.log(`countRef: ${countRef.current}`);

        if (countRef.current >= 10) {
            setCnt(countRef.current);
        }
    };

    return (
        <div>
            <p>useRef 변수: {countRef.current}</p>
            <button onClick={increase}>클릭</button>
            <p>cntState 변수: {cnt}</p>
        </div>
    );
}

export default UseRef;
