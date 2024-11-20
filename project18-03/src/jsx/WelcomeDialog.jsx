import React from 'react';
import FancyBorder from './FancyBorder';

function WelcomeDialog() {
    return (
        <div>
            <FancyBorder color="#eeea00">
                <h1>어서오세요</h1>
                <p>우리 사이트에 방문하신 것을 환영합니다.</p>
            </FancyBorder>
        </div>
    );
}

export default WelcomeDialog;
