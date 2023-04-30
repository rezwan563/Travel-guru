import Header from "../../pages/Shared/Header/Header";
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns'
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BookingLayout = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    const locationDetails = useLoaderData();
    const { id, name, description } = locationDetails;
    console.log(locationDetails);
    return (
        <div className="bg-img ">
            <div className="">
                <Header></Header>
            </div>
            {/* <h2>This is booking layout</h2> */}
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
                        <button className="btn btn-warning">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingLayout;