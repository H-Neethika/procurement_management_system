// ReservationTable.js

import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import './UserTable.css';

const UserTable = ({ users }) => {
  return (
    <table className='reservation-table'>
      <thead>
        <tr>
          <th className='reservation-header'>No</th>
          <th className='reservation-header'>Role</th>
          <th className='reservation-header'>Email</th>
          <th className='reservation-header'>Username</th>
          <th className='reservation-header'>Password</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user._id} className='reservation-row'>
            <td className='reservation-data'>{index + 1}</td>
            <td className='reservation-data'>{user.Role}</td>
            <td className='reservation-data'>{user.Email}</td>
            <td className='reservation-data'>{user.Username}</td>
            <td className='reservation-data'>{user.Password}</td>
            <td className='reservation-data'>
              <div className='icon-link'>
                <Link to={`/users/details/${user._id}`}>
                  <BsInfoCircle className='reservation-icon' />
                </Link>
                <Link to={`/users/edit/${user._id}`}>
                  <AiOutlineEdit className='reservation-icon' />
                </Link>
                <Link to={`/users/delete/${user._id}`}>
                  <MdOutlineDelete className='reservation-icon' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
