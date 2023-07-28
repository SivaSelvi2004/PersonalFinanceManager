import React from 'react';
import "./registration.css";
import { useFormik } from "formik";

import { SignUpSchema } from './schema/registerSchema';
import UserAuthService from '../services/UserAuthService';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, Typography } from "@mui/material";

const Registration = () => {

  const navigate = useNavigate();
  const initialState = {
    
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventRegister();
        action.resetForm();
      }
  })
  const eventRegister = async () => {
    try {
        const response = await UserAuthService.saveUser(values);
        console.log(response);
        const target = "Error";
        const target1 = "Email Already Exists !!";
        if (response.data === target) {
          throw target;
        } else if (response.data === target1) {
          throw target1;
        }
        else {
          setTimeout(() => {
            navigate("/home");
          }, 1000);
      }
    }
    catch (error) {
      console.log(errors);
    }
  };
  return (
    <>
      <div className='rd1'>
        <center>
        <div className='rd2'>
        <div className='rd2'>
          <div className='rd4'>
          <form onSubmit={handleSubmit}>
            <br></br>
            <h4>Welcome onboard!!!</h4>
            <br></br>
    
            <div>      
              <TextField
                type="text"
                id="userName" label="Name" variant="outlined"
                value={values.userName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <br></br>
              {errors.userName && touched.userName?(<span className="error" style={{ color: 'red' }}>{errors.userName}</span>):null}
            </div>

            <br></br>
            <div>
              <TextField
                type="text"
                id="email" label="Email" variant="outlined"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <br></br>
              {errors.email && touched.email?(<span className="error" style={{ color: 'red' }}>{errors.email}</span>):null}
            </div>

            <br></br>
            <div>
              <TextField
                type="password"
                id="password" label="Password" variant="outlined"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <br></br>
              {errors.password && touched.password?(<span className="error" style={{ color: 'red' }}>{errors.password}</span>):null}
            </div>

            <br></br>
            <div>
              <TextField
                type="password"
                id="confirmPassword" label="Confirm Password" variant="outlined"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <br></br>
              {errors.confirmPassword && touched.confirmPassword?(<span className="error" style={{ color: 'red' }}>{errors.confirmPassword}</span>):null}
            </div>

            <br></br>
            <Typography sx={{ fontSize: "15px" }}>
            <Checkbox />
              {" "}
              By agreeing to the Terms of Service and Privacy Policy
            </Typography>
            <br></br>

            
            <Button className='button'variant='contained' style={{color:'white'}}  onClick={handleSubmit}> REGISTER </Button>  <br></br>          <p>
            Already have an account ?{" "}
            <span>
              <a
                onClick={() => navigate("/login")}
                style={{ cursor: "pointer", color: "Red" }}
              >
                Sign In
              </a>
            </span>{" "}
          </p>
            <br></br>
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