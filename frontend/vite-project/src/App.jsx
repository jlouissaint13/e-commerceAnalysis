import { useState } from 'react'
import {TextField} from "@mui/material";
import {Helmet} from "react-helmet";
import logo from './assets/cirlceRounded.png'
import './App.css'






function App() {
    //Sets the state for the username and password; Both of these states are updated through the textFields
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
    //Function for creation of an account
    function createAccount() {
        alert("Placeholder");
    }
    //Going to control the logic for logging in and possibly connect with the backend
    function login() {
        if (username === "jared" && password === '123') {
            alert("Password Success")
            return;
        }
        alert("Invalid password")



    }
    //Control the function for continue as guest
    function continueAsGuest(prop) {
        alert(`PlaceHolder`);
    }

    return (
        <>
           <Helmet>
               <title>Welcome to DataSight!</title>
           </Helmet>
            <div>

            </div>
            <h1 id={"loginText"}>Login </h1>
            <p>


            </p>
            <div>
                <img id={"logo"} src={logo} alt={"data driven logo"}/>
            </div>
            <TextField
                id="loginField"
                label="Email"
                variant="filled"
                size="small"
                className="textField"
                //This line changes the state of the userName field and reacts to any changes made in the textBox
                onChange={event => setUsername(event.target.value)}
            />
            <div>
                <TextField
                    id="passwordField"
                    label="Password"

                    variant="filled"
                    size="small"
                    className="textField"
                    onChange={event => setPassword(event.target.value)}
                    />
            </div>
            <div>


                <button id={"loginButton"} onClick={login}>Login</button>
            </div>
            <div>
                <button id={"createButton"} onClick={createAccount}>Create Account</button>
            </div>
            <div>
                <button id={"guestButton"} onClick={continueAsGuest}>Continue as Guest</button>
            </div>
        </>
    );

}

export default App
