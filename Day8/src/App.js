// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Pages/registration';
import FormValidationExample from './Pages/login';
import Home from './Pages/home';
import Income from "./Pages/income";
import Expense from "./Pages/expense";
import Budget from "./Pages/budget";
import Debt from "./Pages/debt";
import Goal from "./Pages/goal";
import Report from "./Pages/report";
import AboutUs from "./Pages/aboutus";
import Lend from "./Pages/lend";
import Borrow from './Pages/borrow';
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<FormValidationExample/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/login" element={<FormValidationExample/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/income" element={<Income/>}/>
        <Route path="/expense" element={<Expense/>}/>
        <Route path="/budget" element={<Budget/>}/>
        <Route path="/goal" element={<Goal/>}/>
        <Route path="/debt" element={<Debt/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/lend" element={<Lend/>}/>
        <Route path="/borrow" element={<Borrow/>}/>
      </Routes>
      </Router>
  );
}

export default App;