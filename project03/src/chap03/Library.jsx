// 1. React 컴포넌트 불러오기
import React from "react";
// Book 컴포넌트를 불러와서 사용하기
import Book from "./Book";

// 2. 컴포넌트 함수 또는 클래스 정의 -> 파일 이름(반드시 대문자로 파일 이름 지정함)과 동일하게 한다.
function Library() {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library;
