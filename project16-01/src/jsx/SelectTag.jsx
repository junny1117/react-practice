import React from 'react';

function SelectTag() {
  return (
    <div>
      좋아하는 과일:
      <select>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="grape" selected>포도</option>
        <option value="watermelon">수박</option>
      </select>
    </div>
  );
}

export default SelectTag;
