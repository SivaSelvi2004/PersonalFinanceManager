/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import i from '../assets/logo.gif';
import Button from '@mui/material/Button';
import './goal.css';
import axios from 'axios';

export default function Goal(){

    const location=useLocation();
    const data=location.state.en;

  const navigation = useNavigate();

    const[goalData,setGoalData]=useState({});
    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({});
    // const { userEmail } = useUser();
    const[goal,addGoal]=useState([]);

    const handleChange=(e)=>{
    e.preventDefault();  
    const {id,value}=e.target;
    setGoalData({...goalData,[id]:value});
    console.log(goalData);
    }

    // const handleAddIncome=()=>{
    //     axios.post("http://localhost:8080/income",incomeData)
    //     window.location.reload();
    //   }

    const handleAddGoal= async () => {
        try {

            // console.log(`${userEmail}`)
          await axios.post(`http://localhost:8080/goal/${data}`, goalData);
          // Redirect to the home page with the income amount as a parameter
          // window.location.href = `/home?incomeAmount=${incomeData.incomeAmount}`;
          window.location.reload(false);
        } catch (error) {
          console.log(error);
        }
      };  
      
     
      useEffect(() => {
        console.log(data);
          axios.get(`http://localhost:8080/goal/getGoal/${data}`).then(function (response) {
              addGoal(response.data);
            });
        },[]);
  

      const handleEdit = (goalData) => {
        setEditData(goalData);
        setEditing(true);
      };

      const handleUpdateGoal = () => {
        axios
          .put(`http://localhost:8080/goal/update/${editData.goalId}`, editData)
          .then((response) => {
            alert('Record Updated');
            setEditing(false);
            window.location.reload(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      
      const deletecontent = (goalId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/goal/delete/${goalId}`)
            .then((response) => {
              alert('Record Deleted');
              navigation('/goal');
              window.location.reload();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };
    return(
        <>
        <div className='g'>
            <header>
        <nav>
        <img src={i} style={{width:'8vw',height:'8vh'}}></img>
        <h3 style={{fontFamily:'cursive',color:'white',paddingRight:'47rem'}}>Finzo</h3>
        <div className='g1'>
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
       <div className="g2">
        <center>
            <div className='g3'>
            <h1>Goal details</h1><br></br><br></br>

            <div className='g4'>
            <label><h4>Target Amount:</h4></label>
            <input id="targetAmount" type="text"  onChange={handleChange} /><br></br><br></br><br></br><br></br>

            <label><h4>Saved Amount:</h4></label>
            <input id="savedAmount" type="text"  onChange={handleChange} /><br></br><br></br><br></br><br></br>

            <label><h4>Source:</h4></label>
            <input id="goalSource" type="text"  onChange={handleChange} /><br></br><br></br><br></br><br></br>
            
            <label><h4>Date:</h4></label>
            <input id="desiredDate" type="date" style={{width:'14rem'}}  onChange={handleChange}/><br></br><br></br><br></br><br></br>   
            

            <label><h4>Description:</h4></label>
            <input id="goalDesc" type="text"  onChange={handleChange} /><br></br><br></br><br></br><br></br>
            </div>
               
            <Button className='button'variant='contained' style={{color:'white'}}  onClick={handleAddGoal}> ADD </Button>  <br></br>
            </div>
            </center>
       </div>
       <div className='ta'>
                <table>
                    <thead>
                            <th>SOURCE</th>
                            <th>TARGET AMOUNT</th>
                            <th>SAVED AMOUNT</th>
                            <th>NOTES</th>
                            <th>DATE </th>
                            <th>ACTION</th>
                    </thead>
                    <tbody>
                    {goal.map((d)=>(
                        <tr>
                            <td>{d.goalSource}</td>
                            <td>{d.targetAmount}</td>
                            <td>{d.savedAmount}</td>
                            <td>{d.goalDesc}</td>
                            <td>{d.desiredDate}</td>
                            <td>
                            <div className='ta'>
                                <button id='two' onClick={() => handleEdit(d)}>Edit</button>
                                <button id='three' onClick={() => deletecontent(d.goalId)}>Delete</button>
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

};