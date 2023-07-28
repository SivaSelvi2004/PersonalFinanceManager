/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./aboutus.css";
import Footer from './footer';
import i from '../assets/logo.gif';

// import phoneIcon from "../assets/phoneIcon.png";
// import emailIcon from "../assets/email.jpeg";
// import instagram from "../assets/instagram.png";
// import facebook from "../assets/facebook.png";
// import twitter from "../assets/twitter1.svg";
// import youtube from "../assets/youtube1.png";
import {Link} from 'react-router-dom';
export default function About(){
    return (
        <div>
          {/* Header */}
          <header className="header">
            <h1>About Us - Personal Finance App</h1>
            <nav>
          <img src={i} style={{width:'8vw',height:'8vh'}}></img>
            <h3 style={{fontFamily:'cursive',color:'rgb(30, 32, 62)',paddingRight:'47rem'}}>Finzo</h3>
            <div>
  
            <ul id="navbar" >
                <li>
                  <Link to="/home" class="nav-link">Back</Link>
                </li>
        
                
        
              </ul>
            </div>
        </nav>
          </header>
    
          {/* Content */}
          <div className="ash">
            <div className="content">
              <section>
                <h2 className="section-title">Our Vision</h2>
                <p className="section-description">
                  Our vision is to empower individuals and families to take control of their finances
                  and achieve their financial goals. We believe that financial literacy and effective
                  money management are essential skills that can lead to a more secure and prosperous future
                  for individuals and their loved ones.
                </p>
              </section>
    
              <section>
                <h2 className="section-title">Key Features</h2>
                <ul className="section-description">
                  <li>Budgeting Made Easy</li>
                  <li>Expense Tracking</li>
                  <li>Goal Setting</li>
                  <li>Income Management</li>
                  <li>Financial Insights</li>
                  <li>Secure and Private</li>
                  <li>Educational Resources</li>
                </ul>
              </section>
    
              <section>
                <h2 className="section-title">Why Choose Us</h2>
                <p className="section-description">
                  With our Personal Finance App, you get a comprehensive and intuitive platform to manage
                  your finances effectively. Here are some reasons why our app stands out:
                  <ul>
                    <li>User-friendly interface for easy navigation.</li>
                    <li>Advanced budgeting tools for better financial planning.</li>
                    <li>Secure and private data protection.</li>
                    <li>Insightful financial reports and analysis.</li>
                    <li>Access to educational resources for financial literacy.</li>
                  </ul>
                </p>
              </section>
            </div>
          </div>
    
          {/* Footer */}
          <footer className="footer">
          <div className="foot">
          <Footer/>
        </div>
          </footer>
        </div>
      );
};