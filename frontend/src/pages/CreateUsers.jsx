import React from 'react';
import '../styles/CreateUsers.css';
import { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


  const CreateUsers = () => {
    const [Role, setRole] = useState('');
    const [Email, setEmail] = useState('');
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const Roles = ['Admin', 'User', 'Department', 'Lorry', 'Jeep'];
  
    const handleSaveCreateUsers = () => {
      const data = {
        Role,
        Email,
        Username,
        Password,
      };
      setLoading(true);
      axios
       .post('http://localhost:8000/user/create', data)
        .then(() => {
          setLoading(false);
          enqueueSnackbar('Reservation is Created successfully', { variant: 'success' });
          navigate('/createusershome');
        })
        .catch((error) => {
          setLoading(false);
          enqueueSnackbar('Error', { variant: 'error' });
          console.log(error);
        });
    };
  return (
    <div>
       <BackButton/>
    
    <div className="admin-account-container">
    
    <div className='header' >
      Create Your New User
    </div>
    {loading ? <Spinner /> : ''}
    <div className="input-container">
    <label className='text-xl mr-4 text-gray-500'>Role</label>
          <select
            value={Role}
            onChange={(e) => setRole(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          >
            <option value=''>Select Role Type</option>
            {Roles.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
      </div>
      <div className="input-container">
      <label className='text-xl mr-4 text-gray-500'>Email</label>
          <input
            type='text'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
      </div>
      <div className="input-container">
      <label className='text-xl mr-4 text-gray-500'> Username</label>
      <input
            type='text'
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
      </div>
      <div className="input-container">
      <label className='text-xl mr-4 text-gray-500'>Password</label>
      <input
            type='text'
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
   
      </div>
      <div className='my-4 flex items-center justify-center'>
          <button
            className='p-3 bg-pink-500 text-white rounded-lg hover:bg-pink-700'
            style={{ width: '100px' }}
            onClick={handleSaveCreateUsers}
          >
            Save
          </button>
        </div>

        </div> 
    </div>
  );
}
export default CreateUsers;
