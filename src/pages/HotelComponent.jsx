import React from 'react';
import { Card } from 'react-bootstrap';

const HotelComponent = ({hotel}) => {
    const {id, name, description} = hotel;
    return (
        <div className='my-3'>
            <Card>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                  
                    <Card.Text>
                        {description}
                    </Card.Text>
                   
                </Card.Body>
            </Card>
        </div>
    );
};

export default HotelComponent;