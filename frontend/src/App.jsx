import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/Topbar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AdminHome from './pages/AdminHome';
import AdminAccount from './pages/AdminAccount';
import CreateDepartmentsHome  from './pages/CreateDepartmentsHome';
import CreateDepartments from './pages/CreateDepartments';





const App = () => {
  return (
    <div>
      <TopBar />
      <SideBar />
      <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/loginpage" element={<LoginPage />} /> 
       <Route path="/adminhome" element={<AdminHome/>} />
       <Route path="/adminaccount" element={<AdminAccount />} />
       <Route path="/createdepartmentshome" element={<CreateDepartmentsHome />} />
       <Route path="/createdepartments" element={<CreateDepartments />} />
       
      </Routes>
    </div>
  );
}

export default App;
