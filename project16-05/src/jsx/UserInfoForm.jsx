import React, { useState } from 'react';

function UserInfoForm() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [favoriteFruit, setFavoriteFruit] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleNameChange = (e) => setName(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleAgeChange = (e) => setAge(e.target.value);
    const handleFavoriteFruitChange = (e) => setFavoriteFruit(e.target.value);

    const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    };

    return (
    <div>
        <h2>사용자 정보 입력</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>
            이름:
            <input type="text" value={name} onChange={handleNameChange} />
            </label>
        </div>
        <div>
            <label>
            성별:
            <input type="radio" value="남성" checked={gender === '남성'} onChange={handleGenderChange} /> 남성
            <input type="radio" value="여성" checked={gender === '여성'} onChange={handleGenderChange} /> 여성
            </label>
        </div>
        <div>
            <label>
            나이:
            <input type="number" value={age} onChange={handleAgeChange} />
            </label>
        </div>
        <div>
            <label>
            좋아하는 과일:
            <select value={favoriteFruit} onChange={handleFavoriteFruitChange}>
                <option value="">선택하세요</option>
                <option value="사과">사과</option>
                <option value="바나나">바나나</option>
                <option value="포도">포도</option>
                <option value="수박">수박</option>
                <option value="체리">체리</option>
            </select>
            </label>
        </div>
        <button type="submit">제출</button>
        </form>

        {submitted && (
        <div>
            <h2>사용자 정보</h2>
            <p>이름: {name}</p>
            <p>성별: {gender}</p>
            <p>나이: {age}</p>
            <p>좋아하는 과일: {favoriteFruit}</p>
        </div>
        )}
    </div>
    );
}

export default UserInfoForm;
