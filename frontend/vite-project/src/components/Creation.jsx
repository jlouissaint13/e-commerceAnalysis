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
const [phoneNumber,setPhone] = useState('')






function createAccount() {

}

function continueGuest() {
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
                    style={{position: "relative" ,width: '300px', height: '300px', left: '20px', top: '-250px'}}
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
                        position: "relative",
                        top: '-200px',
                        left: '-200px',
                    }}
                    onChange={event => setFname(event.target.value)}
                />
            </div>

            <TextField
                label={"Last Name"}
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "relative",
                    top: '-255px',
                    left: '600px',
                }}
                onChange={event => setLname(event.target.value)}
            />
            <TextField

                label="Email"
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "relative",
                    top: '-160px',
                    left: '300px',
                }}
                onChange={event => setEmail(event.target.value)}
            />
            <TextField

                label="Password"
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "relative",
                    top: '-160px',
                    right: '350px',
                }}
                onChange={event => setPassword(event.target.value)}
            />
            <TextField

                label="Address"
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "relative",
                    top: '-60px',
                    right: '650px',
                }}
                onChange={event => setAddress(event.target.value)}
            />
            <TextField

                label="Phone Number"
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "relative",
                    top: '-115px',
                    left: '300px',
                }}
                onChange={event => setPhone(event.target.value)}

            />

            <FormControl style={{
                position: 'relative',
                top: '20px',
                left: '-160px',

            }} className="textField"> {"What specific assistance are you seeking?"}
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
                            position: 'relative',
                            top: '60px',
                            left: '-10px',

                        }}
                        onClick={createAccount}>Create Account
                </button>

            </div>

            <div>
                <button id={"createButton"}
                        style={{
                            position: 'relative',
                            top: '80px',
                            left: '-10px',

                        }}
                        onClick={continueGuest}>Continue as Guest
                </button>

            </div>
        </>
    );
}

export default Creation