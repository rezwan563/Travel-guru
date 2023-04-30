/* eslint-disable no-unused-vars */
import Header from "../../pages/Shared/Header/Header";
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns'
import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const BookingLayout = () => {
    // const [state, setState] = useState([
    //     {
    //         startDate: new Date(),
    //         endDate: addDays(new Date(), 7),
    //         key: 'selection'
    //     }
    // ])

    // const locationDetails = useLoaderData();
    // // eslint-disable-next-line no-unused-vars
    // const { id, name, description } = locationDetails;
    // console.log(locationDetails);
    return (
        <div className="">
            <div className="">
            <Header></Header>
            </div>
            <Outlet></Outlet>
            {/* <h2>This is booking layout</h2> */}
            {/* <div className="container ">
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
                        <Link to='/booking/checkout'><button className="btn btn-warning">Continue</button></Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default BookingLayout;