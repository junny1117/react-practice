import React, { useState } from 'react';

const Login = () => {
  const [id, setId] = useState('kim');
  const [userEmail, setUserEmail] = useState('kim@naver.com');
  const [submittedId, setSubmittedId] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const submitLogin = () => {
    setSubmittedId(id);
    setSubmittedEmail(userEmail);
  };

  return (
    <div>
      <h1>로그인</h1>
      <div>
        <label>아이디</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디 입력"
        />
        <br />
        <label>이메일</label>
        <input
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="이메일 입력"
        />
        <br />
      </div>
      <button onClick={submitLogin}>로그인</button>
      {submittedId && submittedEmail && (
        <div>
          <h1>사용자 입력값</h1>
          <p>id: {submittedId}</p>
          <p>email: {submittedEmail}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
