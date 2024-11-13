import React from 'react';

// 학생 요소를 담은 리스트 선언
const students = [
    { name: 'Inje' },
    { name: 'Steve' },
    { name: 'Bill' },
    { name: 'Jeff' }
];

function StudentList() {
    const studentList = students.map((student, index) => (
        <li key={index}>{student.name}</li>
    ));

    return (
        <div>
            <h2>학생 목록</h2>
            <ul>{studentList}</ul>
        </div>
    );
}

export default StudentList;
