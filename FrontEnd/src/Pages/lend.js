/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import i from '../assets/logo.gif';
import Button from '@mui/material/Button';
import './goal.css';
import axios from 'axios';

export default function Lend(){
    
  const location=useLocation();
  const data=location.state.data;

const navigation = useNavigate();

  const[lendData,setLendData]=useState({});
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({});
//   const { userEmail } = useUser();
  const[lend,addLend]=useState([]);

  const handleChange=(e)=>{
  e.preventDefault();  
  const {id,value}=e.target;
  setLendData({...lendData,[id]:value});
  console.log(lendData);
  }

  // const handleAddIncome=()=>{
  //     axios.post("http://localhost:8080/income",incomeData)
  //     window.location.reload();
  //   }

  const handleAddLend = async () => {
      try {

          // console.log(`${userEmail}`)
        await axios.post(`http://localhost:8080/lend/${data}`, lendData);
        // Redirect to the home page with the income amount as a parameter
        // window.location.href = `/home?incomeAmount=${incomeData.incomeAmount}`;
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };  
    
   
    useEffect(() => {
      console.log(data);
        axios.get(`http://localhost:8080/lend/getLend/${data}`).then(function (response) {
            addLend(response.data);
          });
      },[]);


    const handleEdit = (incomeData) => {
      setEditData(incomeData);
      setEditing(true);
    };

    const handleUpdateLend = () => {
      axios
        .put(`http://localhost:8080/lend/update/${editData.lendId}`, editData)
        .then((response) => {
          alert('Record Updated');
          setEditing(false);
          window.location.reload(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    const deletecontent = (lendId) => {
      if (window.confirm('Do you want to delete')) {
        axios
          .delete(`http://localhost:8080/income/delete/${lendId}`)
          .then((response) => {
            alert('Record Deleted');
            navigation('/lend');
            window.location.reload(false);
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
            <h1>Lending Details</h1><br></br><br></br>

            <div className='g4'>
            <label><h4>Amount:</h4></label>
            <input id="gamt" type="text" onChange={handleChange}  /><br></br><br></br><br></br><br></br>

            <label><h4>Name:</h4></label>
            <input id="gamt" type="text" onChange={handleChange}  /><br></br><br></br><br></br><br></br>

            <label><h4>Date:</h4></label>
            <input id="esrce" type="date"onChange={handleChange}  /><br></br><br></br><br></br><br></br>
            
            <label><h4>Due Date:</h4></label>
            <input id="edesc" type="date" style={{width:'14rem'}} onChange={handleChange} /><br></br><br></br><br></br><br></br>   
            

            <label><h4>Description:</h4></label>
            <input id="edesc" type="text"onChange={handleChange}   /><br></br><br></br><br></br><br></br>
            </div>
               
            <Link to='/home'><Button className='button'variant='contained' style={{color:'white'}} nClick={handleAddLend}> ADD </Button></Link>  <br></br>
            </div>
            </center>
       </div>
       <div className='ta'>
                <table>
                    <thead>
                            <th>AMOUNT</th>
                            <th>NAME</th>
                            <th>DATE </th>
                            <th>DUE DATE </th>
                            <th>DESC</th>
                            <th>ACTION</th>
                    </thead>
                    <tbody>
                    {lend.map((d)=>(
                        <tr>
                            <td>{d.lendAmount}</td>
                            <td>{d.lendName}</td>
                            <td>{d.lendDate}</td>
                            <td>{d.DueDate}</td>
                            <td>{d.lendDesc}</td>
                            <td>
                            <div className='ta'>
                                <button id='two' onClick={() => handleEdit(d)}>Edit</button>
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

};