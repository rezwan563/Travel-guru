/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Booking = () => {
    const locationDetails = useLoaderData();
    console.log(locationDetails);
    return (
        <div>
            <h2>This is booking page</h2>
        </div>
    );
};

export default Booking;