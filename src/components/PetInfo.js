import React from 'react';

const PetInfo = (props) => {
    const {animal, age} = props;
    return (
        <div>
            <h1>My {animal} is {age} years old.</h1>
        </div>
    );
};

export default PetInfo;