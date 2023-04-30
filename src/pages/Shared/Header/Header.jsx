/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(console.log("Logout successful"))
            .catch(error => console.log(error.message))
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
                    <Link className='me-2 text-black' to='/news'>News</Link>
                    <Link className='me-2 text-black' to="/destination">Destination</Link>
                    <Link className='me-2 text-black' to='/blog'>Blog</Link>
                    <Link className='me-2 text-black' to='/contact'>Contact</Link>
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