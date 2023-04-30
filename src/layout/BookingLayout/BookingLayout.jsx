import Header from "../../pages/Shared/Header/Header";
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns'
import { useState } from "react";

const BookingLayout = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])
    return (
        <div className="">
            <div className="bg-img">
                <Header></Header>
            </div>
            <h2>This is booking layout</h2>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iure maiores, voluptate consectetur dicta impedit. Quae sed facere fuga. Officia qui, praesentium laudantium incidunt autem accusamus fuga dolorem quidem ratione architecto doloremque animi. Alias sed quas ipsa molestias repudiandae magni hic ullam. Ratione dolor sequi rerum vitae. Facere, qui blanditiis.
                        </p>
                    </div>
                    <div className="col-6">
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                        >

                        </DateRange>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingLayout;