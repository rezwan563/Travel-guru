/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [photo, setPhoto] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)

    const handleSignin = (e) =>{
        e.preventDefault()
        console.log(name, photo, email, password);
    }

    return (
        <Container>
            <div className=''>
                <div className=' '>
                    <Form className='w-50 m-auto' onSubmit={handleSignin}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" required />
                           
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                            <Form.Label>Photo url</Form.Label>
                            <Form.Control onChange={(e) => setPhoto(e.target.value)} type="text" placeholder="Photo url" required />
                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password"
                                placeholder="Password" required />
                        </Form.Group>
                        <Form.Text className=''>

                        </Form.Text>
                        <Form.Group onChange={(e) => setAccepted(e.target.checked)} className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept terms & conditions" required />
                        </Form.Group>
                        <Button disabled={!accepted} variant="primary" type="submit">
                            Register
                        </Button>
                        <br />
                        <Form.Text>Already have an accout?<span><Link to='/auth_user'> Login</Link></span></Form.Text>
                    </Form>
                   


                </div>

            </div>
        </Container>
    );
};

export default Register;