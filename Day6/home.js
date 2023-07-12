import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Footer from './footer';
class Home extends Component {
  state={clicked:false};
  handleClick=()=>{
      this.setState({clicked:!this.state.clicked})
  }
    render(){
    return ( 
        <>
        <div className='backgrnd'>
        <nav>
            <h3 style={{fontFamily:'cursive',color:'white'}}>Finance</h3>
            <div>
  
            <ul id="navbar" className={this.state.clicked?"#navbar active":"navbar"}>
                <li>
                  <Link to="/report" class="nav-link">Report</Link>
                </li>
                <li>
                  <Link to="/aboutus" class="nav-link">About us</Link>
                </li>
                
                <li>
                  <Link to="/login" class="nav-link">Logout</Link>
                </li>

              </ul>
            </div>
        </nav>
        <body>
          <div className="hd1">
            <div className='hd'>
              <div className="hd2">
              <h3>Financial Planning is about
                <br></br> more than just good advice or investment 
                <br></br>or returns. It's about providing Guidance 
                <br></br>that you can trust!!</h3> 
              </div>
              <div className='hd3'>
              <ul id="navbar1" className={this.state.clicked?"#navba1r active":"navbar1"}>
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
                  <Link to="/loan" class="nav-link"><h3>Loan</h3></Link>
                </li><br></br><br></br>
                <li>
                  <Link to="/investment" class="nav-link"><h3>Investment</h3></Link>
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
}

export default Home;