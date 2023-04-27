import './App.css';
import Person from "./components/Person";
import persons from "./data/persons";


function App() {
    return (
        <div className="App">
            {persons.map((person) => {
                return <Person {...person}
                               key={person.id}
                />
            })}
        </div>
    );
}

export default App;
