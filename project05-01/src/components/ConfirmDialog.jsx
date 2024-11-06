import React from "react";
import Button from "./Button"; 

function ConfirmDialog(props) {
    return (
        <div>
            <p>내용 확인 시 확인 버튼을 누르세요</p>
            <Button color='green'>확인</Button>
        </div>
    );
}

export default ConfirmDialog;
