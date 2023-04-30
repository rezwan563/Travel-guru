/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns'
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Booking = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection'
        }
    ])

    const locationDetails = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const { id, name, description } = locationDetails;

    return (
        <div className='bg-img'>
            <div className="container ">
                <div className="row">
                    <div className="col-6">
                        <h1 className="text-white">{name}
                        </h1>
                        <h2 className="text-white">{description}</h2>
                    </div>
                    <div className="col-6">
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                        >

                        </DateRange>
                        <br />
                        <Link to='/booking/checkout'><button className="btn btn-warning my-3">Continue <FaArrowRight></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;