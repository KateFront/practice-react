import {useContext} from "react";
import UserContext from "../context/UserContext";

const ChangeUser = () => {
    const {userName, changeUserName} = useContext(UserContext);

    return (

        <button onClick={() => changeUserName(userName === 'Kate' ? 'Alice' : 'Kate')}>
            Change User
        </button>
    );
};

export default ChangeUser;