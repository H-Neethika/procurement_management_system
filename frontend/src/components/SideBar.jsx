// import React, { useState } from 'react';
import '../styles/SideBar.css';

export default function SideBar() {


    return (
        <div className="sidebar">
            <div className="admin-box">
                Admin
            </div>
            <div className="box home-box">
                <a href='#'><i className="fa-solid fa-house" style={{ color: '#FFFFFF', marginRight: '10px' }}></i> 
                Home</a>
            </div>
            <div className="box home-box">
                <a href='#'><i className="fa-solid fa-user-tag" style={{ color: '#FFFFFF' , marginRight: '10px'}}></i> 
                Admin Account</a>    
            </div>
            <div className="box home-box">
                <a href='#'><i className="fa-solid fa-file" style={{ color: '#FFFFFF', marginRight: '10px' }}></i> Generate Document</a>    
            </div>
            <div className="box home-box">
                <a href='#'><i className="fas fa-qrcode" style={{ color: '#FFFFFF' , marginRight: '10px'}}></i>  View Document</a>    
            </div>
            <div className="box home-box">
                <a href='#'><i className="fa-sharp fa-solid fa-building-columns" style={{ color: '#FFFFFF', marginRight: '10px' }}></i> Manage Departments</a>
            </div>
            <div className="box home-box">
                <a href='#'><i className="fa-solid fa-cart-shopping" style={{ color: '#FFFFFF', marginRight: '10px' }}></i> Manage Suppliers</a>    
            </div>
            <div className="box home-box">
                <a href='#'><i className="fa-solid fa-bars-progress" style={{ color: '#FFFFFF' , marginRight: '10px'}} ></i> Procuremnet Progress</a>    
            </div>
            <div className="box home-box">
                 
            </div>
    
        </div>
    );
}
