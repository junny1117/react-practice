//1. React 클래스 불러오기
import React from "react";

//2. Element 이름 정의(대문자로 시작, 파일명이랑 동일해야 한다.)
function Button(props) {
    //속성, 메소드 정의
    return (
        // 한 개의 노드로 리턴되어야 한다.
        <div>
            <button className={`bg-${props.color}`}>
                <b>{props.children}</b>
            </button>
        </div>
    );
}
//3.Element 내보내기 
export default Button;
