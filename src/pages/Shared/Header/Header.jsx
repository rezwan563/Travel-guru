/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='d-flex justify-content-center gap-5 py-3'>
                <div>
                    <Link to='/' className='text-warning fs-5'>Travel guru</Link>
                </div>
                <div>
                    <input type="search" name="destination" placeholder='travel destination' id="" />
                </div>
                <div className=''>
                    <Link className='me-2 text-black' to='/news'>News</Link>
                    <Link className='me-2 text-black' to="/destination">Destination</Link>
                    <Link className='me-2 text-black' to='/blog'>Blog</Link>
                    <Link className='me-2 text-black' to='/contact'>Contact</Link>
                    <button className='btn btn-warning'><Link to='/auth_user'className='text-black'>Login</Link></button>
                </div>
            </div>

        </div>
    );
};

export default Header;