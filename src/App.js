import './App.css';
import Person from "./components/Person";
import persons from "./data/persons";


function App() {
    return (
        <div className="App">

            {persons.map((person, index) => {
                return <Person id={person.id}
                               firstName={person.firstName}
                               lastName={person.lastName}
                               email={person.email}
                               img={person.img}
                               key={index}
                />
            })}
        </div>
    );
}

export default App;
