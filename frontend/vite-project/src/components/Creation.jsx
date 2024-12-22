import {use, useState} from 'react'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Helmet} from "react-helmet";
import logo from '../assets/cirlceRounded.png';
import "../App.css";


function Creation() {
const [fname,setFname] = useState('');
const [lname,setLname] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [address,setAddress] = useState('');


function createAccount() {
    alert("Placeholder")
}








    return (
        <>
        <Helmet>
            <title>Create Account</title>
        </Helmet>
        <h1>
           Create an account with us today!
        </h1>
            <div>
            <img src={logo} alt="data driven logo"/>
            </div>

            <TextField
                id="loginField"
                label="First Name"
                variant="filled"
                size="small"
                className="textField"

            />
            <TextField
                id="loginField"
                label="Last Name"
                variant="filled"
                size="small"
                className="textField"

            />
            <TextField
                id="loginField"
                label="email"
                variant="filled"
                size="small"
                className="textField"

            />
            <TextField
                id="loginField"
                label="password"
                variant="filled"
                size="small"
                className="textField"

            />
            <TextField
                id="loginField"
                label="address"
                variant="filled"
                size="small"
                className="textField"

            />

            <FormControl className="textField"> {}
                <InputLabel id="choice"></InputLabel>
                <Select
                    labelId="dropDownLabel"
                    id="choice"


                    variant="filled"
                >
                    <MenuItem value={10}>Data analysis to make data driven decisions</MenuItem>
                    <MenuItem value={20}>Insightful data visualization </MenuItem>
                    <MenuItem value={30}>Descriptive analytics for summarizing my data</MenuItem>
                </Select>
            </FormControl>


            <div>
                <button id={"createButton"} onClick={createAccount}>Create Account</button>
            </div>

        </>
    );
}

export default Creation