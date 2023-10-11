import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Navbar from './component/navbar/Navbar';
import ShowNavbar from './component/showNavbar/ShowNavbar';

function App() {
  return (
    <Router>
      <ShowNavbar>
        <Navbar/>
      </ShowNavbar>
      <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/dashboard" element = {<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
