import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return ( 
        <>
        <nav>
            <h3 style={{fontFamily:'cursive',color:'white'}}>Finance</h3>
            <div >
  
                  <ul class="nav nav-tabs">
                <li>
                  <Link to="/income" class="nav-link">Income</Link>
                </li>
                <li>
                  <Link to="/expense" class="nav-link">Expense</Link>
                </li>
                <li>
                  <Link to="/budget" class="nav-link">Budget</Link>
                </li>
                <li>
                  <Link to="/loan" class="nav-link">Loan</Link>
                </li>
                <li>
                  <Link to="/login" class="nav-link">Logout</Link>
                </li>

              </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div>
        </nav>
        <body>
          <div className='hd'>
        <div className="hd1">
        <ul class="nav nav-tabs">
                <li>
                  <Link to="/income" class="nav-link">Income</Link>
                </li><br></br>
                <li>
                  <Link to="/expense" class="nav-link">Expense</Link>
                </li><br></br>
                <li>
                  <Link to="/budget" class="nav-link">Budget</Link>
                </li><br></br>
                <li>
                  <Link to="/loan" class="nav-link">Loan</Link>
                </li><br></br>
                <li>
                  <Link to="/login" class="nav-link">Logout</Link>
                </li>
            </ul>
        </div>
        <div className="hd2">
        
        </div>
        </div>
        <div className="foot">
          <h4>Contact</h4>
        </div>
        </body>
        </>
     );
    }
}

export default Home;