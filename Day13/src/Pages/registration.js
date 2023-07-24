import React, { useState } from 'react';
import "./registration.css";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { login } from '../features/user';

import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Registration = () => {
  const handleNext=()=>{
    dispatch(login({email}));navigate("/home")
  }
  const dispatch=useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const[confirmPassword,setConfirmPassword]=useState('');
  const[loading,setLoading]=useState(false);

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }


    // }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%?*&]{8,}$/.test(password)) {
      errors.password='Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    } else if(!password) {
      errors.password='Password required';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;

  };
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (validateForm()) {
  //     console.log('Form submitted:', { name, email, password,confirmPassword
  //     });

  //     navigate('/home');
  //   }
  // };

  async function handleSubmit (event) {
    event.preventDefault();
    setLoading(true);
    if (validateForm()) {
      handleNext();
    }
    try{
      const data={
        userName:name,
        // last_name:lastName,
        email:email,
        // city:city,
        password:password
        // mobile_no:phone
      };
      const response = await axios.post('http://localhost:8080/auth/register', data).then(response=>{console.log(response.data)});
console.log('Registration successful:', response.data);

        dispatch(login({ email }));
        navigate('/home');
        } catch (error) {
        console.error('API request error:', error);
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
        <TextField required id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
        <br></br>
        {errors.name && <span className="error" style={{color:'red'}}>{errors.name}</span>}
      </div>
      <br></br>

    <div>
      <TextField required id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        {errors.email && <span className="error" style={{color:'red'}}>{errors.email}</span>}
    </div>
    <br></br>
    
    <div>
      <TextField required id="outlined-basic" label="Password" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        {errors.password && <span className="error" style={{color:'red'}}>{errors.password}</span>}
    </div>
    <br></br>

    <div>
      <TextField required id="outlined-basic" label="Confirm Password" variant="outlined" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <br></br>
        {errors.confirmPassword && <span className="error" style={{ color: 'red' }}>{errors.confirmPassword}</span>}
    </div>
    <br></br>
    <Button className='button'variant='contained' style={{color:'white'}}  onClick={handleSubmit}> REGISTER </Button>  <br></br>
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