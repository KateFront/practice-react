import './App.css';
import User from "./components/User";
import {useState} from "react";
import UserContext from "./context/UserContext";

function App() {
    const [user, setUser] = useState('Kate')
    return (
        <UserContext.Provider value={user}>
            <div className="App">
                <User/>
            </div>
        </UserContext.Provider>
    );
}

export default App;
