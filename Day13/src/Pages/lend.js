/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import i from '../assets/logo.gif';
import Button from '@mui/material/Button';
import './goal.css'
export default function Lend(){
    return(
        <>
        <div className='g'>
            <header>
        <nav>
        <img src={i} style={{width:'8vw',height:'8vh'}}></img>
        <h3 style={{fontFamily:'cursive',color:'white',paddingRight:'47rem'}}>Finzo</h3>
        <div className='g1'>
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
       <div className="g2">
        <center>
            <div className='g3'>
            <h1>Lending Details</h1><br></br><br></br>

            <div className='g4'>
            <label><h4>Amount:</h4></label>
            <input id="gamt" type="text"  /><br></br><br></br><br></br><br></br>

            <label><h4>Name:</h4></label>
            <input id="gamt" type="text"  /><br></br><br></br><br></br><br></br>

            <label><h4>Date:</h4></label>
            <input id="esrce" type="date" /><br></br><br></br><br></br><br></br>
            
            <label><h4>Due Date:</h4></label>
            <input id="edesc" type="date" style={{width:'14rem'}} /><br></br><br></br><br></br><br></br>   
            

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

};