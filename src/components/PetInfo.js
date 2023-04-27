import React from 'react';

const PetInfo = (props) => {
    const {animal, age, hasPet} = props;
    console.log(props)
    const text = hasPet ? `My ${animal} is ${age} years old.` : 'I don\'t have an animal'

    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default PetInfo;