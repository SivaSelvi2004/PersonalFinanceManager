import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './report.css';
function Report(){
    const [value, onChange] = useState(new Date());
    return ( 
        <>
        <div className='td'>
        <header>
        <nav>
        <h3 style={{fontFamily:'cursive',color:'white'}}>Finsso</h3>
        <div className='td1'>
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
       <div className="td2">
            <div className="wtd2">
                <div className='td3'>
                    
                </div>

                <div className='td4'>
                    <div className='wtd3'>
                        <div className='wd1'>
                            <div className="wtd1">
                                <h2>Balance amount</h2>
                                40000
                            </div>
                        </div>
                    </div>
                    <div className='wtd4'>
                        <div className='wd2'>
                            <div className="wtd5">
                                <Calendar onChange={onChange} value={value} />
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
export default Report;