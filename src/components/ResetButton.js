import React from 'react';

const ResetButton = ({onClick}) => {

    const buttonStyle = {backgroundColor: 'gainsboro'};
    return (
        <div>
            <button style={buttonStyle} onClick={onClick}>Reset</button>
        </div>
    );
};

export default ResetButton;