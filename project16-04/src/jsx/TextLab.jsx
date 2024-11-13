import React, { useState } from 'react';

function TextLab() {
const [name, setName] = useState('');
const [gender, setGender] = useState('');

const handleNameChange = (e) => {
    setName(e.target.value);
};

const handleSelectChange = (e) => {
    setGender(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    alert(`이름: ${name}, 성별: ${gender}`);
};

return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>이름:
            <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>성별:
            <select value={gender} onChange={handleSelectChange}>
            <option value="">선택하세요</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
            </select>
        </label>
        <button type="submit">제출</button>
        </form>
    </div>
    );
}

export default TextLab;
