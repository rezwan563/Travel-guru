
import { Map, Marker } from "pigeon-maps"
import { useLoaderData } from "react-router-dom";
import HotelComponent from "./HotelComponent";
const Checkout = () => {

    const locationDetails = useLoaderData();

    const { name, latitude, longitude } = locationDetails;
    
    const mapLocationArray = [latitude, longitude];
     
    return (
        <div>
            <div className="container">
                <h1>{name}</h1>
                <div className="row">
                    <div className="col">
                        {
                            locationDetails.hotels.map(hotel => <HotelComponent key={hotel.id} hotel={hotel}></HotelComponent>)
                        }
                    </div>
                    <div className="col" >
                        <Map height={500} defaultCenter={mapLocationArray} defaultZoom={10}>
                            <Marker width={50} anchor={mapLocationArray} />
                        </Map>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Checkout;