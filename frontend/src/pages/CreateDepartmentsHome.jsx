import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import UserTable from '../components/home/UserTable';
import '../styles/CreateDepartmentsHome.css';

const CreateDepartmentsHome = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

 

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4 '>
        <button className='button' onClick={() => setShowType('table')}>
          Table
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='title'>User Reservation List</h1>
        <Link to='/CreateDepartments' className='add-user-link'>
          <MdOutlineAddBox />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="reservation-list-container">
          <UserTable users={users} />
        </div>
      )}
    </div>
  );
}

export default CreateDepartmentsHome;
