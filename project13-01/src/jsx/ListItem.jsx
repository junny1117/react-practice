import React from 'react'

function ListItem() {
    const numbers = [1,2,3,4,5];

    const listItem = numbers.map((number)=><li>{number}</li>);
    console.log(listItem)


  return (
    <div>
       <ul>
        {listItem}
       </ul>
    </div>
  )
}

export default ListItem