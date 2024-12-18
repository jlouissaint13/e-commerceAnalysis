import { useState } from 'react'
import {TextField} from "@mui/material";
import {Helmet} from "react-helmet";
import logo from './assets/cirlceRounded.png'
import axios from "axios";
import './App.css'


function App() {
    //Sets the state for the username and password; Both of these states are updated through the textFields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //if text is empty invalid
    function isEmpty(username, password) {

        return username.length === 0 || password.length === 0;
    }

    //if email contains @ and .com return true as email is valid


    //Function for creation of an account
    function createAccount() {
        alert("Placeholder");
    }

    //Going to control the logic for logging in and possibly connect with the backend
    //Fix email validation bug that's breaking code
    //make sure isEmpty is good and check it
    function login(event) {
        event.preventDefault();


        if (isEmpty(username, password)) {
            alert("Please enter all fields")
            return;
        }
        if (username === 'Jared' && password === "123") alert("Logging in....")
    }
    //Only works if on click is triggered first fix that later
   const enter = (event) => {
        if (event.key === 'Enter') {
            login(event);
        }
   };



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


                <button id={"loginButton"} onKeyDown={enter}   onClick={login}>Login</button>
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
