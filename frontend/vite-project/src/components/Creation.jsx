import {use, useState} from 'react'
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Helmet} from "react-helmet";
import logo from '../assets/cirlceRounded.png';
import "./Creation.css";
import {findVariableByName} from "eslint-plugin-react/lib/util/variable.js";
import { useNavigate } from 'react-router-dom';

function Creation() {
    
    
    
    const forms = {
    fname:'',
    lname:'',
    email:'',
    password:'',
    address:'',
    phoneNumber:''
}

const [values,setValues] = useState(forms);
const [emptyField,setEmptyField] = useState('false');    
const navigate = useNavigate();
    
const handleInputChange = (event) => {
    const {name,value} = event.target;
    
    setValues({
        ...values,
        [name]: value,
    });
    
    
}

async function createAccount(event) {
    //if forms valid false return;
    if (!formsValid()) {
        alert("Please fill out all fields")
        return;
    }
    
        if (!emailValidation(values.email) || isEmpty(values.email)) {
        alert("invalid email");
        return;
        }
    if (phoneValidation(values.phoneNumber)) {
        alert("invalid phone");
        return;
    }
    
      
    const userData = {
        fname: values.fname.trim(),
        lname: values.lname.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
        address: values.address.trim(),
        phoneNumber: values.phoneNumber.trim()
    };
try{
    const response = await fetch('http://localhost:8000/register/submit',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    
    });
if (response.status === 200) {
    navigate('/login');
}
if (response.status === 400) {
    alert("Account already exists!")
}
else{
    alert("failure");
}
}catch (error) {
    alert(error);
}
}

function continueGuest() {
    navigate('/Data')
}



function isEmpty(textField) {
        //if true then something isEmpty or null;
        if (!textField || textField === '') return true;

        return false;
}
function emailValidation(email) {
        //if true then email is valid otherwise false
        if (email.includes('@') && email.includes(".com")) return true;
        return false;
}
function phoneValidation(phone) {
    //if something is wrong like phone being shorter than 10 digits or not a number return false;
    if (phone>10 || !isNaN(phone)) return false;
    
    return true;
}
function formsValid() {
  
    //Only put these four because the rest are check on there own. The point of this function is to check if all the forms are empty;
    let form = [values.fname,values.lname,values.password,values.address];
    for(let i = 0;i<form.length;i++) {
        if (isEmpty(form[i])) {
            return false;
            
        }
    }
    return true;
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
                    //passing in the values into the handle input function;
                    name={"fname"}
                    value={values.fname}
                    onChange={handleInputChange}
                    
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
                name={"lname"}
                value={values.lname}
                onChange={handleInputChange}
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
                name={"email"}
                value={values.email}
                onChange={handleInputChange}
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
                name={"password"}
                value={values.password}
                onChange={handleInputChange}
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
                name={"address"}
                value={values.address}
                onChange={handleInputChange}
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
                name={"phoneNumber"}
                value={values.phoneNumber}
                onChange={handleInputChange}
                
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
                            top: '65px',
                            left: '-10px',

                        }}
                        onClick={continueGuest}>Continue as Guest
                </button>

            </div>
        
        </>
    );
}

export default Creation