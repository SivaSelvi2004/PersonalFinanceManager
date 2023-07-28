/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import {Link} from 'react-router-dom';
import "./report.css";
import i from '../assets/logo.gif';

import { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { sizeHeight } from "@mui/system";
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default function Report(){
    const options = {
		// backgroundColor: '#091b2b',
            height: 500,
            width:1200,

		animationEnabled: true,
		title: {
			text: "Expense Report"
		},
		axisY: {
			title: "Expenses",
			suffix: " (Rs)"
		},
		data: [{
			type: "splineArea",
			// xValueFormatString: "MMM",
			// yValueFormatString: "#,##0.## bn kW⋅h",
			showInLegend: true,
			legendText: "Rs = Indian Rupees(INR)",
			dataPoints: [
				{ x: new Date(2008, 0), y: 0 },
				{ x: new Date(2008, 1), y: 500 },
				{ x: new Date(2008, 2), y: 1000 },
				{ x: new Date(2008, 3), y: 750 },
				{ x: new Date(2008, 4), y: 2200 },
				{ x: new Date(2008, 5), y: 890 },
				{ x: new Date(2008, 6), y: 990 },
				{ x: new Date(2008, 7), y: 2225 },
				{ x: new Date(2008, 8), y: 950 },
				{ x: new Date(2008, 9), y: 830 }
			]
		}]
	}
    const navRef = useRef();
    return(
        <>
        <div className="dh">
        <header>
			
			<nav>
        <img src={i} style={{width:'8vw',height:'8vh'}}></img>
        <h3 style={{fontFamily:'cursive',color:'white',paddingRight:'47rem'}}>Finzo</h3>
        <div className='n'>
        <div>
        <ul id="navbar">
            <li><Link to="/home"class="nav-link">Home</Link></li>
            <li><Link to="/income" class="nav-link">Income</Link></li>
            <li><Link to="/expense" class="nav-link">Expense</Link></li>
            <li><Link to="/budget" class="nav-link">Budget</Link></li>
            <li> <Link to="/goal" class="nav-link">Goals</Link> </li>
            <li><Link to="/debt" class="nav-link">Debt</Link></li>
         </ul>
       </div>
       </div>
       </nav>
		</header>
        <body>
            <center>
            <div>
                <br></br>
            {/* <h3>REPORTS</h3> */}
            <br></br>
            <br></br>
            <div className="gh">

			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
            </div>
		</div>
        </center>
        <br></br>
        <Link to='/home'><button id="bu1">BACK</button></Link>
        </body>
        </div>
        </>
    );
};