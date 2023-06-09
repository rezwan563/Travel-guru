/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Home from './Home';

const HomeContainer = () => {
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch('https://travel-guru-server-rezwan563.vercel.app/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            {
                destinations &&
                destinations.map(location => <Home key={location.id} location={location}></Home>)
            }
        </div>
    );
};

export default HomeContainer;