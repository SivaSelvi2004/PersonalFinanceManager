/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './income.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import i from '../assets/logo.gif';
import Button from '@mui/material/Button';
function Budget(){

    const navigation = useNavigate();

    const[budgetData,setBudgetData]=useState({});

  const handleChange=(e)=>{
    e.preventDefault();
    const {id,value}=e.target;
    setBudgetData({...budgetData,[id]:value});
    console.log(budgetData);
  }

  const[budget,addBudget]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/budget`).then(function (response) {
          addBudget(response.data);
        });
      }, []);

    const handleAddBudget=()=>{
        axios.post(`http://localhost:8080/budget`,budgetData)
        window.location.reload();
      }

      const deletecontent = (budgetId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/budget/delete/${budgetId}`)
            .then((response) => {
              alert('Record Deleted');
              navigation('/budget');
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
       <div className="id2"  style={{height:'75vh'}}>
        <center>
            <div className='id3' style={{height:'60vh'}}>
            <h1>Budget details</h1><br></br><br></br>

            <div className='id4' style={{height:'30vh'}}>
            <label><h4>Amount:</h4></label>
            <input id="budgetAmount" type="text" onChange={handleChange}  /><br></br><br></br><br></br><br></br>

            <label><h4>Source:</h4></label>
            <input id="budgetSource" type="text"onChange={handleChange} /><br></br><br></br><br></br><br></br>
            </div>
               
            <Button className='button'variant='contained' style={{color:'white'}} onClick={handleAddBudget}> ADD </Button><br></br>
            </div>
            </center>
       </div>
       <div className='ta'>
                <table>
                    <thead>
                            <th>AMOUNT</th>
                            <th>SOURCE</th>
                            <th>ACTION</th>
                    </thead>
                    <tbody>
                    {budget.map((d)=>(
                        <tr>
                        <td>{d.budgetAmount}</td>
                            <td>{d.budgetSource}</td>
                           
                            <td>
                            <div className='ta'>
                                <button id='two'>Edit</button>
                                <button id='three' onClick={() => deletecontent(d.budgetId)}>Delete</button>
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
export default Budget;