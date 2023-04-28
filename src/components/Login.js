import React, {useState} from 'react';

const Login = () => {
    /*  const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      */
    const [data, setData] = useState({username: '', password: ''})

    const handleFormSubmit = (event) => {
        event.preventDefault();
        /*  const userData = {
              username,
              password
          }*/
        alert(JSON.stringify(data));
    }

    /* const inputUsernameChange = (e) => {
         setData({...data, username: e.target.value})
     }
     const inputPasswordChange = (e) => {
         setData({...data, password: e.target.value})
     }*/

    const handleInputChange = (e, name) => {
        setData({...data, [name]: e.target.value})
    }

    return (
        <>
            <h1>Login form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Username:
                    <input type="text"
                           value={data.username}
                           onChange={(e) => handleInputChange(e, 'username')}/>
                </label>
                <label>Password:
                    <input type="password"
                           value={data.password}
                           onChange={(e) => handleInputChange(e, 'password')}/>
                </label>
                <button type="submit">Login</button>
            </form>
        </>

    );
};

export default Login;