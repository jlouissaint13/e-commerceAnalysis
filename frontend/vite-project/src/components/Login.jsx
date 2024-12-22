import { useState } from 'react'
import {TextField} from "@mui/material";
import {Helmet} from "react-helmet";
import logo from '../assets/cirlceRounded.png';
import "../App.css";


function Login() {
    //Sets the state for the username and password; Both of these states are updated through the textFields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [emptyEmail,setEmptyEmail] = useState(false);
    const [emptyPassword,setEmptyPassword] = useState(false);


    //resets username and password after they are used
    function clear() {
        setUsername('');
        setPassword('');
    }

    //function to check if text is empty
    function isEmpty(textField) {
        //if null or empty return true
        if (!textField || textField === '' ) return true;
        //else return false
        return false
    }


    //if email contains @ and .com return true as email is valid
    //if time replace with a regex
    function emailValidation() {
        if (username.includes('@') && username.includes('.com')) {
            return true;
        }
        return false;


    }

    //Function for creation of an account
    function createAccount() {
        alert("Placeholder");
    }

    async function login(event) {

        const loginData = {
            username: username,
            password: password

        }
        if (emailValidation() === false) {
            setInvalidEmail(true);

            return;
        }
        if (isEmpty(username)) {
            alert("is empty")
            setEmptyEmail(true);

        }

        try {
            const res = await fetch('http://localhost:8000/login/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),

            });
            setInvalidEmail(false);
            setEmptyEmail(false);
            clear();
            alert("Look good sending data through!")
        } catch (error) {
            alert(error)
        }

    }

    function helperText() {
        if (emptyEmail) return "Please enter an email"

        if (invalidEmail) return "Please enter a valid email"
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
                error={invalidEmail || emptyEmail}
                helperText={helperText()}



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


                <button id={"loginButton"}

                        onClick={login}>Login

                </button>
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



export default Login
