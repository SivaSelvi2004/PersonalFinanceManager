import React, { useState } from 'react';
import "./registration.css";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[age,setAge]=useState('');
  const[mobileNumber,setMobileNumber]=useState('');
  const [errors, setErrors] = useState({});
  const [currency, setCurrency] = useState('USD');

  const handleAgeChange = (event) => {
    const inputAge = event.target.value;
    setAge(inputAge);

    // Perform age validation logic
    if (inputAge >= 18 && inputAge <= 120) {
      errors.age='You are eligible to proceed.';
    } else {
      errors.age='You age must be greater than 18';
    }
  };
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }
    // setAge(inputAge);
    // if(!age){
    //     errors.age='Age is required';
    // }
    // else if(age>18){

    // }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?*&])[A-Za-z\d@$!*%?&]{8,}$/.test(password)) {
      errors.password='Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    } else if(!password) {
      errors.password='Password required';
    }

    if(!mobileNumber){
        errors.mobileNumber='Phone number is required';
    }
    else if(!/^\d{10}$/.test(mobileNumber)){
        errors.mobileNumber='Invalid phone number';   
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, perform further actions (e.g., submit data)
      console.log('Form submitted:', { name, age,mobileNumber,email, password });
    }
  };

  return (
    <>
    <div className="rd1">
      <center>
    <div className='rd2'>
      <div className='rd2'>
    <div className='rd4'>
    <form onSubmit={handleSubmit}>
    <h3>Registration</h3><br></br>
    <p></p>
      <div>
        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
        <br></br>
        {errors.name && <span className="error" style={{color:'red'}}>{errors.name}</span>}
      </div>
      <br></br>

      <div>
        <TextField id="outlined-basic" label="Age" variant="outlined" onChange={handleAgeChange} />
        <br></br>
        {errors.age && <span className="error" style={{color:'red'}}>{errors.age}</span>}
        {/* {validAge ? (<p  style={{color:'green'}}>You are eligible to proceed.</p>) : 
        (<p>You age must be greater than 18</p>)} */}
      </div>
      <br></br>

    <div>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" onChange={(e) => setMobileNumber(e.target.value)} />
        <br></br>
        {errors.mobileNumber && <span className="error" style={{color:'red'}}>{errors.mobileNumber}</span>}
    </div>
    <br></br>

    <div>
      <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        {errors.email && <span className="error" style={{color:'red'}}>{errors.email}</span>}
    </div>
    <br></br>
    
    <div>
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        {errors.password && <span className="error" style={{color:'red'}}>{errors.password}</span>}
    </div>
    <br></br>
  <div>
      <label htmlFor="currencySelect">Select Currency:</label>
      <select id="currencySelect" value={currency} onChange={handleCurrencyChange}>
        <option value="USD">USD - US Dollar</option>
        <option value="EUR">EUR - Euro</option>
        <option value="GBP">GBP - British Pound</option>
        <option value="JPY">JPY - Japanese Yen</option>
        <option value="INR">INR - Indian Money</option>
        {/* Add more currency options as needed */}
      </select>
      <br></br>
      <p>Selected Currency: {currency}</p>
    </div>
        <br></br>
    <button type="submit">Submit</button>
    <br></br><br></br>
        <Link to='/login'>Already have an account? Login here</Link>

    </form>
    </div>
    </div>
    </div>
    </center>
    </div>
    </>
  );
};

export default Registration;