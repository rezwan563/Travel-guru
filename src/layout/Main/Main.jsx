/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/Shared/Header/Header';
import "./Main.css"

const Main = () => {
    return (
        <div className='bg-img'>
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;