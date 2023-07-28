/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { Link ,useLocation} from 'react-router-dom';
import Calendar from 'react-calendar';
import i from '../assets/logo.gif';
import i1 from'../assets/image13.jpg';
import 'react-calendar/dist/Calendar.css';
import './dashboard.css';
import axios from 'axios';
import { useUser } from './userContext';

export default function DashBoard(){
    const location=useLocation();
    const data=location.state.ename;
    const [balance,setBalance]= useState(0);
    const {userEmail}=useUser();
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        console.log(data)
        axios.get(`http://localhost:8080/getBalance/${data}`).then((res)=>{setBalance(res.data)})
      });
        const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
    return ( 
        <>
        <div className='td'>
        <header>
        <nav>
        <img src={i} style={{width:'8vw',height:'8vh'}}></img>
            <h3 style={{fontFamily:'cursive',color:'rgb(30, 32, 62)',paddingRight:'45rem'}}>Finzo</h3>
        <div className='td1'>
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
       <div className="td2">
            <div className="wtd2">
                
                <div className='td3'>
                <center>
                  <div className='wtd6'>
                    <img src={i1} style={{width:'8vw',height:'18vh',paddingTop:'3rem'}}></img>
                    </div>  <br></br>
                    <h4>Welcome </h4>
                    <br></br>
                    <p>{data}</p>
                    </center>
                    <br></br><br></br>
                <ul id="navbar1" >
                <li>
                  <Link to="/income" class="nav-link"><h4>Settings</h4></Link>
                </li><br></br><br></br>
                <li>
                  <Link to="/login" class="nav-link"><h4>Logout</h4></Link>
                </li><br></br><br></br>
                </ul>
                </div>

                <div className='td4'>
                    <div className='wtd3'>
                        <div className='wd1'>
                            <div className="wtd1">
                                <h2>Balance amount</h2>
                                <h3>Rs.{balance}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='wtd4'>
                        <div className='wd2'>
                            <div className="wtd5">
                                <Calendar onChange={onChange} value={value} />
                            </div>
                            <div className='ca1'>
                                <h4>Date and Time</h4>
                                {currentDateTime}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>   
        </div>
        </>
     );
}
