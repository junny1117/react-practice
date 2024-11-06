//1. React 불러오기
import React from "react";
import ReactText from "./ReactText"
//2. 힘수 선언 및 정의
function Hello() {
return (
<div>
<h1 style={({backgroundColor:'yellowgreen'})}>Hello, <ReactText/></h1>
</div>
);
}

//3.내보내기
export default Hello;