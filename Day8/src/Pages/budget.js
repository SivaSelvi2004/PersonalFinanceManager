/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import './income.css';
import i from '../assets/logo.gif';
import Button from '@mui/material/Button';
function Budget(){
    return(
        <>
        <div className='whole'>
            <header>
        <nav>
        <img src={i} style={{width:'8vw',height:'8vh'}}></img>
        <h3 style={{fontFamily:'cursive',color:'white',paddingRight:'47rem'}}>Finzo</h3>
        <div className='id1'>
        <ul id="navbar">
            <li><Link to="/home"class="nav-link">Home</Link></li>
            <li><Link to="/income" class="nav-link">Income</Link></li>
            <li><Link to="/expense" class="nav-link">Expense</Link></li>
            <li><Link to="/budget" class="nav-link">Budget</Link></li>
            <li> <Link to="/goal" class="nav-link">Goals</Link> </li>
            <li><Link to="/debt" class="nav-link">Debt</Link></li>
         </ul>
       </div>
       </nav>
       </header>
       <body>
       <div className="id2">
        <center>
            <div className='id3'>
            <h1>Budget details</h1><br></br><br></br>

            <div className='id4'>
            <label><h4>Amount:</h4></label>
            <input id="eamt" type="text"  /><br></br><br></br><br></br><br></br>

            <label><h4>Source:</h4></label>
            <input id="esrce" type="text" /><br></br><br></br><br></br><br></br>

            <label><h4>Description:</h4></label>
            <input id="edesc" type="text"  /><br></br><br></br><br></br><br></br>
            </div>
               
            <Link to='/home'><Button className='button'variant='contained' style={{color:'white'}}> ADD </Button></Link>  <br></br>
            </div>
            </center>
       </div>
        </body>   
        </div>
        </>
    );
}
export default Budget;