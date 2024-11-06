import React, { useState } from 'react';
import styles from './styles';

function Toolbar2(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const correctId = 'admin';
    const correctPwd = '1234';

    const handleLogin = () => {
        if (id === correctId && pwd === correctPwd) {
            onClickLogin(id);
        } else {
            alert('아이디와 비밀번호가 일치하지 않습니다.');
            setId('');
            setPwd('');
        }
    };

    const handleLogout = () => {
        setId('');
        setPwd('');
        onClickLogout();
    };

    return (
        <div style={styles.wrapper}>
            {isLoggedIn ? (
                <>
                    <span style={styles.greeting}>{`${id}님 환영합니다!`}</span>
                    <button onClick={handleLogout}>로그아웃</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="아이디"
                    />
                    <input
                        type="password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        placeholder="비밀번호"
                    />
                    <button onClick={handleLogin}>로그인</button>
                </>
            )}
        </div>
    );
}

export default Toolbar2;
