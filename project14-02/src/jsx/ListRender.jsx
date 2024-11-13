import React from 'react'
import ListItems from './ListItems'

const fruits = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'cherry' }
];

const numbers = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' }
];


function ListRender() {
  return (
    <div>
        <h2>숫자</h2>
        <ListItems items={numbers}/>
        <h2>과일</h2>
        <ListItems items={fruits}/>
    </div>
  )
}

export default ListRender