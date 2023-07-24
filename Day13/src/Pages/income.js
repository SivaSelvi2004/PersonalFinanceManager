/* eslint-disable jsx-a11y/alt-text */
import { React,useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './income.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import i from '../assets/logo.gif';
import Button from '@mui/material/Button';
function Income(){
  const navigation = useNavigate();
    const[incomeData,setIncomeData]=useState({});
  const handleChange=(e)=>{
    e.preventDefault();
    const {id,value}=e.target;
    setIncomeData({...incomeData,[id]:value});
    console.log(incomeData);
  }
  const[income,addIncome]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/income`).then(function (response) {
          addIncome(response.data);
        });
      }, []);
    const handleAddIncome=()=>{
        axios.post(`http://localhost:8080/income`,incomeData)
        window.location.reload();
      }

      const deletecontent = (incomeId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/income/delete/${incomeId}`)
            .then((response) => {
              alert('Record Deleted');
              navigation('/income');
              window.location.reload(false);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };
    return ( 
        <>
        <div className='whole'>
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
       <div className="id2">
        <center>
            <div className='id3'>
            <h1>Income details</h1><br></br><br></br>

            <div className='id4'>
            <label><h4>Amount:</h4></label>
            <input id="incomeAmount" type="text"  onChange={handleChange}  /><br></br><br></br><br></br><br></br>

            <label><h4>Source:</h4></label>
            <input id="incomeSource" type="text"  onChange={handleChange} /><br></br><br></br><br></br><br></br>

            <label><h4>Description:</h4></label>
            <input id="incomeDesc" type="text"  onChange={handleChange}  /><br></br><br></br><br></br><br></br>
        

            <label><h4>Date:</h4></label>
            <input id="incomeDate" type="date" style={{width:'14rem'}} onChange={handleChange}  /><br></br><br></br><br></br><br></br>
            </div>

            <Button className='button'variant='contained' style={{color:'white'}} onClick={handleAddIncome}> ADD </Button>  <br></br>
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
                    {income.map((d)=>(
                        <tr>
                        <td>{d.incomeAmount}</td>
                            <td>{d.incomeSource}</td>
                            <td>{d.incomeDesc}</td>
                            <td>{d.incomeDate}</td>
                            <td>
                            <div className='ta'>
                                <button id='two'>Edit</button>
                                <button id='three' onClick={() => deletecontent(d.incomeId)}>Delete</button>
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
export default Income;