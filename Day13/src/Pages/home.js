/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {useSelector} from 'react-redux';
import UserLogout from "./logout";
import i from '../assets/logo.gif';
import './home.css';
import { Link } from 'react-router-dom';
import Footer from './footer';
function Home() {
  const user=useSelector(state => state.user.value)
    return ( 
        <>
        <div className='backgrnd'>
        <nav>
          <img src={i} style={{width:'8vw',height:'8vh'}}></img>
            <h3 style={{fontFamily:'cursive',color:'rgb(30, 32, 62)',paddingRight:'47rem'}}>Finzo</h3>
            <div>
  
            <ul id="navbar" >
                <li>
                  <Link to="/report" class="nav-link">Report</Link>
                </li>
                <li>
                  <Link to="/aboutus" class="nav-link">AboutUs</Link>
                </li>
                
                <li>
                {!user.email?<Link to='/login'>Logout</Link>:
                <h4>{user.email}<UserLogout/></h4>
                  }
                </li>
              </ul>
            </div>
        </nav>
        <body>
          <div className="hd1">
            <div className='hd'>
              <div className="hd2">
              <h2>Financial Planning is about
                <br></br> more than just good advice or investment 
                <br></br>or returns. It's about providing Guidance 
                <br></br>that you can trust!!</h2> 
              </div>
              <div className='hd3'>
              <ul id="navbar1" >
              <li>
                  <Link to="/dashboard" class="nav-link"><h3>DashBoard</h3></Link>
                </li><br></br><br></br>
            
              <li>
                  <Link to="/income" class="nav-link"><h3>Income</h3></Link>
                </li><br></br><br></br>
                <li>
                  <Link to="/expense" class="nav-link"><h3>Expense</h3></Link>
                </li><br></br><br></br>
                <li>
                  <Link to="/budget" class="nav-link"><h3>Budget</h3></Link>
                </li><br></br><br></br>
                <li>
                  <Link to="/goal" class="nav-link"><h3>Goals</h3></Link>
                </li><br></br><br></br>
                <li>
                  <Link to="/debt" class="nav-link"><h3>Debt</h3></Link>
                </li><br></br><br></br>
                </ul>
              </div>
            </div>
          </div>
        </body>
        <div className="foot">
          <Footer/>
        </div>
        </div>
        </>
     );
}

export default Home;