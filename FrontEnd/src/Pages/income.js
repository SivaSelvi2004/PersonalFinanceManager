/* eslint-disable jsx-a11y/alt-text */
import { React,useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './income.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import i from '../assets/logo.gif';
import Button from '@mui/material/Button';
import { useUser } from './userContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Income(){

    const[incomeData,setIncomeData]=useState({});
    // const { userEmail } = useUser();

    const authToken = localStorage.getItem("authToken")
    const userEmail = localStorage.getItem("userEmail")
    
    const handleChange=(e)=>{
    e.preventDefault();
    const {id,value}=e.target;
    setIncomeData({...incomeData,[id]:value});
    console.log(incomeData);
    }
    
    const handleAddIncome = async () => {
        try {
            console.log(`${userEmail}`);
            console.log(authToken);

            const config = {
              headers:{
                Authorization: `Bearer ${authToken}`,
              },
            };
            await axios.post(`http://localhost:8080/income/${userEmail}`, incomeData,config);

            toast.success('Income added successfully', {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000, 
            });

            window.location.href = `/income?incomeAmount=${incomeData.incomeAmount}`;
          } catch (error) {
            console.log(error);
          }
      };  
      
      const[income,addIncome]=useState([]);
      useEffect(() => {
          axios.get(`http://localhost:8080/income/get/${userEmail}`).then(function (response) {
              addIncome(response.data);
            });
        },[userEmail]);

        const navigation = useNavigate();
        const deletecontent = (incomeId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/income/${incomeId}`)
            .then((res) => {
              alert('Record Deleted');
              navigation('/income');
              window.location.reload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };
      const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({});
      const handleEdit = (lendData) => {
        setEditData(lendData);
        setEditing(true);
      };
      
      const handleUpdateIncome = () => {
        axios
          .put(`http://localhost:8080/income/update/${editData.incomeId}`, editData)
          .then((response) => {
            alert('Record Updated');
            setEditing(false);
            window.location.reload(false);
          })
          .catch((error) => {
            console.log(error);
          });
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
              {editing ? (
                <div className='id3'>
                <h1>Edit Income</h1>
                <div className='id4'>
                <label>Amount:</label>
                <input
                  id='incomeAmount'
                  type='text'
                  value={editData.incomeAmount}
                  onChange={(e) => setEditData({ ...editData, incomeAmount: e.target.value })}
                /><br></br><br></br><br></br><br></br>

                <label>Amount:</label>
                <input
                  id='incomeSource'
                  type='text'
                  value={editData.incomeSource}
                  onChange={(e) => setEditData({ ...editData, incomeSource: e.target.value })}
                /><br></br><br></br><br></br><br></br>

                <label>Amount:</label>
                 <input
                  id='incomeDesc'
                  type='text'
                  value={editData.incomeDesc}
                  onChange={(e) => setEditData({ ...editData,incomeDesc: e.target.value })}
                /><br></br><br></br><br></br><br></br>

                <label>Amount:</label>
                 <input
                  id='incomeDate'
                  type='text'
                  value={editData.incomeDate}
                  onChange={(e) => setEditData({ ...editData, incomeDate: e.target.value })}
                /> <br></br><br></br><br></br><br></br>    
                
                <Button
                  className='button'
                  variant='contained'
                  style={{ color: 'white' }}
                  onClick={handleUpdateIncome}
                >
                  Update
                </Button>
                <Button
                  className='button'
                  variant='contained'
                  style={{ color: 'white' }}
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </Button>
                </div>
              </div>
            ) : (
              <div className='id3'>
                <h1>Income details</h1>
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
            )}
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
}
export default Income;