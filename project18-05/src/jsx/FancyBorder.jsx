import React from 'react';

function FancyBorder(props) {
    return (
        <div
            style={{
                padding: '8px',
                backgroundColor: props.color || 'white'
            }}
        >
            {props.children}
        </div>
    );
}

export default FancyBorder;
