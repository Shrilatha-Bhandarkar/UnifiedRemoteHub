import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './auth/login';
import AdminLogin from './auth/admin/login';
import EmployeeLogin from './auth/employee/login';
import EmployeeSignup from './auth/employee/signup';
import Navbar from './components/navbar';
import Landingpage from './pages/landingpage';
import Profile from './profile/profile';
import Home from './pages/Home';
import WellBeing from './pages/Wellbeing/WellBeing';
import Workspace from './pages/Workspace';
import TodoList from './pages/Todo/TodoList'
import Footer from './components/footer';
import { UserProvider } from './UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/employeelogin" element={<EmployeeLogin />} />
          <Route path="/employeesignup" element={<EmployeeSignup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wellbeing" element={<WellBeing />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
