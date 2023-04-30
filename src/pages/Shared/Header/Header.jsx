/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='d-flex justify-content-center gap-5 py-3'>
                <div>
                    <h5 className='text-warning'>Travel guru</h5>
                </div>
                <div>
                    <input type="search" name="destination" placeholder='travel destination' id="" />
                </div>
                <div className=''>
                    <Link className='me-2' to='/news'>News</Link>
                    <Link className='me-2' to="/destination">Destination</Link>
                    <Link className='me-2' to='/blog'>Blog</Link>
                    <Link className='me-2' to='/contact'>Contact</Link>
                    <button className='btn btn-warning'><Link to='/login'className='text-black'>Login</Link></button>
                </div>
            </div>

        </div>
    );
};

export default Header;