/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import "./Header.css"
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }
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
                
                    <ActiveLink className='me-2 text-black' to='/news'>News</ActiveLink>
                    <ActiveLink className='me-2 text-black' to="/destination">Destination</ActiveLink>
                    <ActiveLink className='me-2 text-black' to='/blog'>Blog</ActiveLink>
                    <ActiveLink className='me-2 text-black' to='/contact'>Contact</ActiveLink>
                    {
                        user && <img className='avatar-img me-2' src={user.photoURL} alt="" />
                    }
                    {
                        user ? <button onClick={handleLogout} className='btn btn-warning'>Logout</button>
                            :
                            <button className='btn btn-warning'><Link to='/auth_user' className='text-black'>Login</Link></button>

                    }
                </div>
            </div>

        </div>
    );
};

export default Header;