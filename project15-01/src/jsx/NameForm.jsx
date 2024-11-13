import React, { useState } from 'react';

function NameForm() {
const [value, setValue] = useState('');

const handleChange = (e) => {
    setValue(e.target.value);
};

const handleSubmit = (e) => {
    alert(`사용자 이름: ${value}`);
    e.preventDefault();
};

return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>
        이름:
        <input type="text" value={value} onChange={handleChange} />
        </label>
        <button type="submit">제출</button>
    </form>
    </div>
);
}

export default NameForm;
