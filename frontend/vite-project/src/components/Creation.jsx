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
            <div>
                <img
                    id="logoC"
                    src={logo}
                    alt="Turning Data Into Decisions"
                    style={{width: '300px', height: '300px', left: '20px', top: '-300px'}}
                />
            </div>

            <div>

            </div>
            <div className="form-container">

                <TextField

                    label="First Name"
                    variant="filled"
                    size="medium"
                    className="textField"
                    style={{
                        position: "absolute",
                        top: '540px',
                        left: '940px',
                    }}
                />
            </div>

            <TextField
                label={"Last Name"}
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "absolute",
                    top: '540px',
                    left: '1300px',
                }}
            />
            <TextField

                label="Email"
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "absolute",
                    top: '630px',
                    left: '940px',

                }}
            />
            <TextField

                label="Password"
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "absolute",
                    top: '630px',
                    left: '1300px',
                }}
            />
            <TextField

                label="Address"
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "absolute",
                    top: '720px',
                    left: '940px',
                }}
            />
            <TextField

                label="Phone Number"
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "absolute",
                    top: '720px',
                    left: '1300px',
                }}

            />

            <FormControl style={{
                position: 'absolute',
                top: '800px',
                left: '1100px',

            }} className="textField"> {"What are you looking for?"}
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
                <button id={"createButton"}
                        style={{
                            position: 'absolute',
                            top: '900px',
                            left: '1100px',

                        }}
                        onClick={createAccount}>Create Account
                </button>

            </div>

            <div>
                <button id={"createButton"}
                        style={{
                            position: 'absolute',
                            top: '955px',
                            left: '1100px',

                        }}
                        onClick={createAccount}>Continue as Guest
                </button>

            </div>
        </>
    );
}

export default Creation