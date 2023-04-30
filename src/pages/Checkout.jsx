
import { Map, Marker } from "pigeon-maps"
const Checkout = () => {



    return (
        <div>
            <div className="container">
                <h1>This is checkout Page</h1>
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col" >
                        <Map height='100vh' defaultCenter={[23.43, 90.25]} defaultZoom={10}>
                            <Marker width={50} anchor={[23.43, 90.25]} />
                        </Map>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Checkout;