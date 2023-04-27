import React from 'react';
import persons from "../data/persons";
import Person from "./Person";

const Persons = () => {
    return (
        <div className="cards">
            {persons.map((person) => {
                return <Person {...person}
                               key={person.id}
                />
            })}
        </div>
    );
};

export default Persons;