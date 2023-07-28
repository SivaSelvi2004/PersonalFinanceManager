import React from 'react';
import './login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SignInSchema } from './schema/loginSchema';
import { addEmails,addToken} from './store/reducer';
import { useFormik } from "formik";
import UserAuthService from '../services/UserAuthService';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';


const Login = () => {

  const dispatch=useDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const { values, errors,  handleBlur, handleChange,handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventLogin();
        action.resetForm();
      }
    })

  const eventLogin = async () => {
    try {
      const response = await UserAuthService.loginUserWithEmailAndPassword(values);
      console.log(response);
      var token = response.data.accessToken;
      var userEmail = response.data.email;

      if (response.message !== "Request failed with status code 400") {
        setTimeout(() => {
          dispatch(addEmails(userEmail));
          dispatch(addToken(token));
          navigate("/home");
        }, 1000);
      }
      else {
        <h1>Login failed:(</h1>
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

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
                  id="email"
                  label="Email"
                  type="email"
                  value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
                />
                <br></br>
                {errors.email && touched.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : null}
              </div>
              <br></br>
              <div>
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br></br>
                {errors.password && touched.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
              </div>
              <br></br>
              <Button className="button" variant="contained" style={{ color: 'white' }} onClick={handleSubmit}>
                Login
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