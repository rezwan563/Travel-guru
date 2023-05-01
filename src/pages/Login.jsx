/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [hidden, setHidden] = useState(true);
    const [accepted, setAccepted] = useState(false)
    const location = useLocation()
    // console.log(location);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const { googleLogin, emailLogin } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        emailLogin(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate(from);

        })
        .catch(error => {
            const errorMessage = error.message;
            if(errorMessage === "Firebase: Error (auth/wrong-password)."){
                setError("Password did not match. Try again")
                alert("Password did not match. Try again")
            }
            else if(errorMessage === 'Firebase: Error (auth/user-not-found).'){
                setError("User not found. Check your email")
                alert("User not found. Check your email")
            }
            else{
                setError(errorMessage)
            }
            
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate(from);
            })
            .catch(error => console.log(error.message))
    }

    

    return (
        <Container>
            <div className=''>
                <div className=' '>
                    <Form className='w-50 m-auto' onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <div>
                                <h3>Please Login</h3>
                            </div>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => setPassword(e.target.value)} type={hidden ? 'password' : 'text'}
                                placeholder="Password" required />
                            {
                                hidden ? <FaEyeSlash onClick={() => setHidden(!hidden)}></FaEyeSlash>
                                    :
                                    <FaEye onClick={() => {
                                        setHidden(!hidden)
                                    }}></FaEye>
                            }
                        </Form.Group>
                        <Form.Text className={error ?'text-danger' : ''}>
                            {error && error}
                        </Form.Text>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={(e) => setAccepted(e.target.checked)} type="checkbox" label="Check me out" required />
                        </Form.Group>
                        <Button disabled={!accepted} variant="primary" type="submit">
                            Login
                        </Button>
                        <br />
                        <Form.Text>Don't have an accout?<span><Link to='/auth_user/register' state={{from: location.state}}> Create one</Link></span></Form.Text>
                    </Form>
                    <div className='d-flex justify-content-center mt-2'>
                        <button onClick={handleGoogleLogin} className='btn border border-2'><FaGoogle className='me-2 fs-5'></FaGoogle> Continue with Google</button>
                    </div>


                </div>

            </div>
        </Container>
    );
};

export default Login;