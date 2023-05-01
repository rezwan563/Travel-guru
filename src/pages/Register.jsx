/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [photo, setPhoto] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const [hidden, setHidden] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.from?.pathname || '/'

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSignin = (e) => {
        e.preventDefault()
        console.log(name, photo, email, password);
        if (password !== confirm) {
            setError("Password didn't match")
            return
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        e.target.reset();
                        navigate(from);
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.log(error.message)
                if(error.message === "Firebase: Error (auth/email-already-in-use)."){
                    setError("Email already in use");

                }

            })
    }

    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        if (!/[A-Z]/.test(passwordInput)) {
            setError("At least one upper case")
            return;
        }
        else if (!/[a-z]/.test(passwordInput)) {
            setError('At least one lower case')
        }
        else if (!/[0-9]/.test(passwordInput)) {
            setError("At least one digit")
        }
        else if (!/[#?!@$%^&*-]/.test(passwordInput)) {
            setError("At least one special character")
        }
        else if (!/.{8,}/.test(passwordInput)) {
            setError("Minimum eight in length")
        }
        else {
            setError('')
        }
        setPassword(passwordInput)
    }



    return (
        <Container>
            <div className=''>
                <div className=' '>
                    <Form className='w-50 m-auto' onSubmit={handleSignin}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <div>
                                <h3>Please Register</h3>
                            </div>
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
                            <Form.Control onChange={handlePassword} type={hidden ? 'password' : 'text'}
                                placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={(e) => setConfirm(e.target.value)} type={hidden ? 'password' : 'text'}
                                placeholder="Confirm Password" required />
                            {
                                hidden ? <FaEyeSlash onClick={() => setHidden(!hidden)}></FaEyeSlash>
                                :
                                <FaEye onClick={() => {
                                    setHidden(!hidden)
                                }}></FaEye>
                            }
                        </Form.Group>

                        <Form.Text className={error ? 'text-danger' : "text-success"}>
                            {
                                error && error
                            }
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