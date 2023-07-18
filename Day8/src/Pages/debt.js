/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { Link } from 'react-router-dom';
import './debt.css';
import i from '../assets/logo.gif';
import Button from '@mui/material/Button';

export default function Debt(){
    return(
        <>
        <div className='whole'>
            <header>
        <nav>
        <img src={i} style={{width:'8vw',height:'8vh'}}></img>
        <h3 style={{fontFamily:'cursive',color:'white',paddingRight:'47rem'}}>Finzo</h3>
        <div className='dd1'>
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
       <div className="dd2">
        <center>
        <div className="dd3">
            <div className='dd4'>
            </div>
            {/* <Link to='/lend'><Button className='button'variant='contained' style={{color:'white'}}> Lend </Button></Link> */}

            <div className='dd5'>
            </div>
        </div>

        <div className='dd6'>
                <div className='dd7'>

                <Link to='/lend'><Button className='button'variant='contained' style={{color:'white'}}> Lend </Button></Link>
                </div>

                <div className='dd8'>
                <Link to='/borrow'><Button className='button'variant='contained' style={{color:'white'}}> Borrow </Button></Link>

                </div>
        </div>

        </center>
       </div>
        </body>   
        </div>
    </>
    );

};