import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/Topbar';
import SideBar from './components/SideBar';
import LoginPage from './pages/LoginPage';
import AdminAccount from './pages/AdminAccount';





const App = () => {
  return (
    <div>
      <TopBar />
      <SideBar />
      <Routes>
       { /*<Route path="/" element={<LoginPage />} /> */}
       <Route path="/" element={<AdminAccount />} />
        {/* Add more routes here if needed */}
      </Routes>
    </div>
  );
}

export default App;
