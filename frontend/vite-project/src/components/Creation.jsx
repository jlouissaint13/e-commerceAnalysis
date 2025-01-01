import {use, useState} from 'react'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Helmet} from "react-helmet";
import logo from '../assets/cirlceRounded.png';
import "./Creation.css";



function Creation() {

const forms = {
    fname: '',
    lname: '',
    email:'',
    password:'',
    address:'',
    phoneNumber:''
}
const [values,setValues] = useState(forms);
const handleInputChange = (e) => {
    const name = e.target;
    const value = e.target;
    setValues({
        ...values,
        [name]: value,
    });
}
function isEmpty(textField) {
    //if true then something isEmpty
    if (!textField || textField === '') return true;
    
    return false;
}
function emailValidation() {
    if (email.includes('@') && email.includes(".com")) return true;
    return false;
}
function validForm() {
    let flag = true;
    let textFields = [forms.fname,forms.lname,forms.email,forms.password,forms.address,forms.phoneNumber];
    for (let i = 0;i<textFields.length;i++) {
        if (isEmpty(textFields[i])) {
            flag = false;
            break;
        }
        
    }
    return flag;
}


async function createAccount(event) {
    alert("button")
    
    if (!validForm()) {
        alert("Invalid");
        return;
    }
    
    const userData = {
        username: email.trim(),
        password: password.trim()
    };
try{
    const response = await fetch('http://localhost:8080/register/submit',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    
    });
if (response.status === 200) {
    alert("Submission");
}
else{
    alert("failure");
}
}catch (error) {
    alert(error);
}
}

function continueGuest() {
    alert("Placeholder")
}






    return (
        <>


            <Helmet>
                <script src="http://localhost:5173"></script>
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
                    onChange={event => handleInputChange(event.target.value)}
                    
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
                onChange={event => handleInputChange(event.target.value)}
            />
            <TextField

                label="Email"
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "relative",
                  
                    top: '-160px',
                    right: '50px',
                }}
                onChange={event => handleInputChange(event.target.value)}
            />
            <TextField

                label="Password"
                variant="filled"
                size="medium"
                className="textField"
                style={{
                    position: "relative",
                    top: '-160px',
                    left: '0px',
                }}
                onChange={event => handleInputChange(event.target.value)}
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
                onChange={event => handleInputChange(event.target.value)}
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
                onChange={event => handleInputChange(event.target.value)}
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