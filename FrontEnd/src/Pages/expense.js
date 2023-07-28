/* eslint-disable jsx-a11y/alt-text */

import React,{useState, useEffect} from 'react';
import { Link , useLocation} from 'react-router-dom';
import './income.css';
import i from '../assets/logo.gif';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import { useUser } from './userContext';
import axios from 'axios';

function Expense(){

  const location=useLocation();
    const data=location.state.ena;

  const navigation = useNavigate();
    const[expenseData,setExpenseData]=useState({});
    const { userEmail } = useUser();
    const handleChange=(e)=>{
    e.preventDefault();
    
    const {id,value}=e.target;
    setExpenseData({...expenseData,[id]:value});
    console.log(expenseData);
    }
    const handleAddExpense=()=>{
        axios.post(`http://localhost:8080/expense/${data}`,expenseData)
        window.location.reload();
      }

    const[expense,addExpense]=useState([]);
      useEffect(() => {
          axios.get(`http://localhost:8080/expense/getExpense/${data}`).then(function (response) {
              addExpense(response.data);
            });
    }, []);
    




  // const handleChange=(e)=>{
  //   e.preventDefault();
  //   const {id,value}=e.target;
  //   setExpenseData({...expenseData,[id]:value});
  //   console.log(expenseData);
  // }

  // const[expense,addExpense]=useState([]);
  //   useEffect(() => {
  //       axios.get("http://localhost:8080/expense").then(function (response) {
  //         addExpense(response.data);
  //       });
  //     }, []);
  //   const handleAddExpense=()=>{
  //       axios.post("http://localhost:8080/expense",expenseData)
  //       window.location.reload();
  //     }

      const deletecontent = (expenseId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/expense/delete/${expenseId}`)
            .then((response) => {
              alert('Record Deleted');
              navigation('/expense');
              window.location.reload(false);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };
    return(
        <>
        <div className='whole'>
            <header>
        <nav>
        <img src={i} style={{width:'8vw',height:'8vh'}}></img>
        <h3 style={{fontFamily:'cursive',color:'white',paddingRight:'47rem'}}>Finzo</h3>
        <div className='id1'>
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
       <div className="id2">
        <center>
            <div className='id3'>
            <h1>Expense details</h1><br></br><br></br>

            <div className='id4'>
            <label><h4>Amount:</h4></label>
            <input id="expenseAmount" type="text"  onChange={handleChange}  /><br></br><br></br><br></br><br></br>

            <label><h4>Source:</h4></label>
            <input id="expenseSource" type="text"  onChange={handleChange} /><br></br><br></br><br></br><br></br>

            <label><h4>Description:</h4></label>
            <input id="expenseDesc" type="text"  onChange={handleChange}  /><br></br><br></br><br></br><br></br>
        

            <label><h4>Date:</h4></label>
            <input id="expenseDate" type="date" style={{width:'14rem'}} onChange={handleChange}  /><br></br><br></br><br></br><br></br>
            </div>
               
            <Button className='button'variant='contained' style={{color:'white'}}  onClick={handleAddExpense}> ADD </Button>  <br></br>
            </div>
            </center>
       </div>
       <div className='ta'>
                <table>
                    <thead>
                            <th>AMOUNT</th>
                            <th>SOURCE</th>
                            <th>NOTES</th>
                            <th>DATE </th>
                            <th>ACTION</th>
                    </thead>
                    <tbody>
                    {expense.map((d)=>(
                        <tr>
                        <td>{d.expenseAmount}</td>
                            <td>{d.expenseSource}</td>
                            <td>{d.expenseDesc}</td>
                            <td>{d.expenseDate}</td>
                            <td>
                            <div className='ta'>
                                <button id='two'>Edit</button>
                                <button id='three'onClick={() => deletecontent(d.expenseId)}>Delete</button>
                            </div>
                            </td>
                        </tr>    

                    ))}
                    </tbody>
                </table>
                </div>
        </body>   
        </div>
    </>
    );
}
export default Expense;