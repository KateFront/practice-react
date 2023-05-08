import './App.css';
import User from "./components/User";
import {useState} from "react";
import UserContext from "./context/UserContext";
import ChangeUser from "./components/ChangeUser";

function App() {
    const [user, setUser] = useState('Kate');

    return (
        <UserContext.Provider value={{userName: user, changeUserName: setUser}}>
            <div className="App">
                <User/>
                <ChangeUser/>
            </div>
        </UserContext.Provider>
    );
}

export default App;
