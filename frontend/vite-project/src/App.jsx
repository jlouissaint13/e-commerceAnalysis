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
    const loginData = {
        username: username,
        password: password

    }
    //resets username and password after they are used
    function clear(u) {
       setUsername('');
       setPassword('');
    }
    //if text is empty invalid
    function isEmpty(username, password) {

        return ((!username || username.length === 0) ||(!password || password.length === 0) );
    }

    //if email contains @ and .com return true as email is valid
    //if time replace with a regex
    function emailValidation() {
        return (username.includes('@') && username.includes('.com'));

    }

    //Function for creation of an account
    function createAccount() {
        alert("Placeholder");
    }
    async function login() {
        alert("working")
        alert('active button');


        if (isEmpty() || emailValidation()) {
            alert("Something is empty");
            return;
        }
        try{
            const res = await fetch('http://localhost:8000/recieve', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
        }catch (error) {
            alert(error)
        }
        alert("data sent clearing....")
        clear()






    }


    //Only works if on click is triggered first fix that later


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
