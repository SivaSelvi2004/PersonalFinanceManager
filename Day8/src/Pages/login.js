import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';
import './login.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FormValidationExample = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
 
  // const user=useSelector(state => state.user.value)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const errors = {};

    
    if(!email){
        errors.email="Email is required";
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Invalid Email "
    }
    else{
        errors.email ="";
    }

    if(!password){
        errors.password ="Password is requird";
    }
    else if(password.length<8){
        errors.password="Password length should be greater than 8";
    }
    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?*&])[A-Za-z\d@$!*%?&]{8,}$/.test(password)){
        errors.password="Password should contain one uppercase,lowercase,digit,special character";
    }
    else{
        errors.password="";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    // event.preventDefault();

    if (validateForm()) {
      // Form is valid, perform further actions (e.g., submit data)
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div className="d1">
      <center>
       <div className="d2">
        <div className="d3">
        <div class Name="d4">
        <h1 className='main'>Login</h1>
        <br></br>
    <form onSubmit={handleSubmit}>
      <div>
        <TextField required value={email} id="Email" label="Email" input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        {errors.email && <span className="error" style={{color:'red'}}>{errors.email}</span>}
      </div>
      <br></br>
      <div>

        <TextField required value={password} id="Password" label="Password" input type="password"  onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        {errors.password && <span className="error" style={{color:'red'}}>{errors.password}</span>}
      </div>
      <br></br>
      <Link to='/home'><Button className='button'variant='contained' style={{color:'white'}} onClick={()=>{dispatch(login({email}));navigate("/home")}}> LOGIN </Button></Link>  <br></br> <br></br>   
        <Link to='/registration'>Don't have an account? Register</Link>
        <br></br>
      </form>
      </div>
      </div>
      </div>
      </center>
        </div>
  );
};

export default FormValidationExample;