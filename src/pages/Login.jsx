/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, password,);
    }
    return (
        <Container>
            <div className=''>
                <div className=' '>
                    <Form className='w-50 m-auto' onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password"
                                placeholder="Password" required />
                        </Form.Group>
                        <Form.Text className={error && 'text-dange'}>
                            {error}
                        </Form.Text>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <br />
                        <Form.Text>Don't have an accout?<span><Link to='/auth_user/register'> Create one</Link></span></Form.Text>
                    </Form>
                    <div className='d-flex justify-content-center mt-2'>
                        <button className='btn border border-2'><FaGoogle className='me-2 fs-5'></FaGoogle> Continue with Google</button>
                    </div>


                </div>

            </div>
        </Container>
    );
};

export default Login;