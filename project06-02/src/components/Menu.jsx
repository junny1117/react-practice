import React from "react";

function Menu(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>가격: {props.price}원</p>
        </div>
    );
}

export default Menu;
