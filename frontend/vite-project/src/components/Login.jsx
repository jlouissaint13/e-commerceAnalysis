import { useState } from 'react'
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Helmet} from "react-helmet";
import logo from '../assets/cirlceRounded.png';
import "../App.css";
import {Visibility, VisibilityOff} from "@mui/icons-material";


function Login() {
    //Sets the state for the username and password; Both of these states are updated through the textFields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [emptyEmail,setEmptyEmail] = useState(false);
    const [emptyPassword,setEmptyPassword] = useState(false);
    //if the username or password is wrong
    const [invalidInformation,setInvalidInformation] = useState(false);


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
   function handleKeyDown(event) {
        event.preventDefault() // to prevent the default of onclick from being called
        if (event.key === "Enter") {
            login()
        }
   }

    async function login(event) {
        //To reset the state of the errors
        resetErrors();
        let validForm = true;
        const loginData = {
            username: username.trim(),
            password: password.trim()

        }
        if (isEmpty(username)) {
            setEmptyEmail(true);
            validForm = false;
            alert("empty username");

        }

        if (emailValidation() === false) {
            setInvalidEmail(true);
            validForm = false;
            alert("username validation");

        }

        if (isEmpty(password)) {
            setEmptyPassword(true);
            validForm = false;
            alert("empty password");
        }
        // if form is not valid return
        if (!validForm) {
            alert("error check");
            return;
        }
        try {
            const response = await fetch('http://localhost:8000/login/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),

            });
            if (response.status === 200) {

            }
            else{
                alert("invalid information");
                setInvalidInformation(true);
            }

        } catch (error) {
            alert(error)
        }

    }

    function emailError() {
        if (emptyEmail) return "Please enter your email";

        if (invalidEmail) return "Please enter a valid email";

        if (invalidInformation) return "";

    }
    function passwordError() {
        if (emptyPassword) return "Please enter your password";
        if (invalidInformation) return "Your email or password is incorrect";
    }
    // function to reset the status of my errors back to false
    function resetErrors() {
        setInvalidEmail(false);
        setEmptyEmail(false);
        setEmptyPassword(false);
        setInvalidInformation(false);
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
                error={invalidEmail || emptyEmail || invalidInformation}
                helperText={emailError()}



            />

            <div>
                <TextField
                    id="passwordField"
                    label="Password"
                    type="password"
                    variant="filled"
                    size="small"
                    className="textField"
                    onChange={event => setPassword(event.target.value)}
                    error={emptyPassword || invalidInformation}
                    helperText={passwordError()}



                />
            </div>
            <div>

                <button  id={"loginButton"}
                        onKeyDown={handleKeyDown}
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
