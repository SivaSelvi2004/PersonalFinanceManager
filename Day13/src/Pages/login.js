import React, { useState } from 'react';
import './login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.user.value);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid Email';
    } else {
      errors.email = '';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password length should be greater than 8';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      errors.password = 'Password should contain one uppercase, lowercase, digit, special character';
    } else {
      errors.password = '';
    }

    setErrors(errors);
    return Object.values(errors).every((error) => error === '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, perform further actions (e.g., submit data)
      console.log('Form submitted:', { email, password });

      // Assuming you want to dispatch the login action after successful form validation
      dispatch(login({ email }));
      navigate('/home');
    }
  };

  return (
    <div className="d1">
      <center>
        <br></br>
        <br></br>
        <br></br>
        <div className="d2">
          <div className="d3">
            <br></br>
            <br></br>
            <h1 className="main2">Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  required
                  value={email}
                  id="Email"
                  label="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
                {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
              </div>
              <br></br>
              <div>
                <TextField
                  required
                  value={password}
                  id="Password"
                  label="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                {errors.password && <span className="error" style={{ color: 'red' }}>{errors.password}</span>}
              </div>
              <br></br>
              <Button className="button" variant="contained" style={{ color: 'white' }} onClick={handleSubmit}>
                Login!
              </Button>{' '}
              <br></br>
              <br></br>
              <Link to="/Registration" style={{ color: 'blue' }}>
                New User? Register
              </Link>
            </form>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Login;