import React, { useEffect, useState } from 'react';

function CleanUP() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 실행중...", count);
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Clean up function to clear the interval
        return () => {
            clearInterval(timer);
            console.log("타이머 정리");
        };
    }, [count]);

    return (
        <div>클린업 이용한 타이머 예제</div>
    );
}

export default CleanUP;
