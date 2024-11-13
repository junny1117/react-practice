import React, { useState } from 'react';

function SelectTag() {
  const [value, setValue] = useState([]);

  const handleChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setValue(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) {
      alert('과일을 선택해주세요!');
    } else {
      alert(`좋아하는 과일: ${value.join(', ')}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          좋아하는 과일:
          <select multiple={true} value={value} onChange={handleChange}>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="grape">포도</option>
            <option value="watermelon">수박</option>
          </select>
        </label>
        <button type="submit">제출</button>
        <ul>
          {value.map((val) => (
            <li key={val}>{val}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default SelectTag;
