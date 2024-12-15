import { useState } from 'react'
import {TextField} from "@mui/material";
import {Helmet} from "react-helmet";
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
               <title>Welcome Page</title>
           </Helmet>

            <h1>Login</h1>
            <div>
                <button onClick={login}>Login</button>
            </div>
          <div>
              <TextField id="loginField" label="Email" variant="standard" />
          </div>

        </>
    );

}

export default App
