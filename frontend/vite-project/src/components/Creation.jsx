import {use, useState} from 'react'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Helmet} from "react-helmet";
import logo from '../assets/cirlceRounded.png';
import "./Creation.css";



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

                <h1 id={"welcomeText"}>Create an account with us today! </h1>

            <div className="form-container">

            <TextField
                id="firstName"
                label="First Name"
                variant="filled"
                size="small"
                className="textField"

            />
            </div>

            
            <TextField
                id="lastName"
                label="Last Name"
                variant="filled"
                size="small"
                className="textField"

            />
            <TextField
                id="email"
                label="email"
                variant="filled"
                size="small"
                className="textField"

            />
            <TextField
                id="password"
                label="password"
                variant="filled"
                size="small"
                className="textField"

            />
            <TextField
                id="address"
                label="address"
                variant="filled"
                size="small"
                className="textField"

            />
            
            <FormControl className="textField"> {"What are you looking for?"}
                <InputLabel id="choice"></InputLabel>
                <Select
                    labelId="dropDownLabel"
                    id="choice"

                    size="small"
                    variant="filled"
                >
                    <MenuItem value={1}>Data analysis to make data driven decisions</MenuItem>
                    <MenuItem value={2}>Insightful data visualization </MenuItem>
                    <MenuItem value={3}>Descriptive analytics for summarizing my data</MenuItem>
                </Select>
            </FormControl>


            <div>
                <button id={"createButton"} onClick={createAccount}>Create Account</button>
            </div>

        </>
    );
}

export default Creation