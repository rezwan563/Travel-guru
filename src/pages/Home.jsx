/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({location}) => {
    const { id, description, imgUrl, destination} = location;




    return (
        <Container>
            <div className='row gap-5'>
                <div className='col'>
                    <div className='text-white'>
                        <h1 className=''>{destination}</h1>
                        <h6>{description}</h6>
                        <Link to='/booking'><button className='btn btn-warning'>Book Now!</button></Link>
                    </div>
                </div>
                <div className='col col-lg-6 py-2'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imgUrl} />
                        <Card.Body>

                            <Card.Text>
                               {destination}
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
            </div>



        </Container>
    );
};

export default Home;