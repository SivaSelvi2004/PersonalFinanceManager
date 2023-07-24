// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Pages/registration';
import Home from './Pages/home';
import Income from "./Pages/income";
import Expense from "./Pages/expense";
import Budget from "./Pages/budget";
import Debt from "./Pages/debt";
import Goal from "./Pages/goal";
import Report from "./Pages/report";
import Lend from "./Pages/lend";
import Borrow from './Pages/borrow';
import Login from './Pages/login';
import About from './Pages/aboutus';
import DashBoard from './Pages/dashboard';
function App() {
  return (
   
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/income" element={<Income/>}/>
        <Route path="/expense" element={<Expense/>}/>
        <Route path="/budget" element={<Budget/>}/>
        <Route path="/goal" element={<Goal/>}/>
        <Route path="/debt" element={<Debt/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/lend" element={<Lend/>}/>
        <Route path="/borrow" element={<Borrow/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
      </Routes>
  );
}

export default App;