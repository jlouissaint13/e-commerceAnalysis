import { useState } from 'react'
import {TextField} from "@mui/material";
import {Helmet} from "react-helmet";
import logo from './assets/logoGray.png'
import './App.css'






function App() {
    const name = "Jared"
    const age = 22;


    function createAccount() {
        alert("Placeholder")
    }

    function login() {
        alert("Placeholder")
    }
    function continueAsGuest(prop) {
        alert(`PlaceHolder`)
    }

    return (
        <>
           <Helmet>
               <title>Welcome to DataSight!</title>
           </Helmet>

            <h1>Login</h1>
            <p>
                Please enter your email and password
            </p>
            <div>
            <div>
                <img src={logo} alt={"data driven logo"}/>
            </div>
            </div>
            <TextField
                id="loginField"
                label="Email"
                variant="standard"
                size="small"


            />
            <div>
                <TextField
                    id="passwordField"
                    label="Password"
                    variant="standard"
                    size="small"
                    />
            </div>
            <div>


                <button onClick={login}>Login</button>
            </div>

        </>
    );

}

export default App
