import React from 'react';
import { Link } from 'react-router-dom';
import './income.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Expense(){
    return(
        <>
        <div className='whole'>
            <header>
        <nav>
        <h3 style={{fontFamily:'cursive',color:'white'}}>Finsso</h3>
        <div className='id1'>
        <ul id="navbar">
            <li><Link to="/home"class="nav-link">Home</Link></li>
            <li><Link to="/income" class="nav-link">Income</Link></li>
            <li><Link to="/expense" class="nav-link">Expense</Link></li>
            <li><Link to="/budget" class="nav-link">Budget</Link></li>
            <li> <Link to="/loan" class="nav-link">Loan</Link> </li>
            <li><Link to="/investment" class="nav-link">Investment</Link></li>
         </ul>
       </div>
       </nav>
       </header>
       <body>
       <div className="id2">
        <center>
            <div className='id3'>
            <h1>Expense details</h1><br></br><br></br>

               <div className='l'>
               <label><h4>Amount:</h4></label>
               </div>
               
               <div className='l1'>
               <TextField id="income" label="Amount" variant="standard" />
               </div>

               <div className='l'>
               <label><h4>Source:</h4></label>
               </div>

               <div className='l1'>
               <TextField id="income" label="Source" variant="standard" />
               </div>

               <div className='l'>
               <label><h4>Description:</h4></label>
               </div>

               <div className='l1'>
               <TextField id="income" label="Description" variant="standard" />
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
export default Expense;