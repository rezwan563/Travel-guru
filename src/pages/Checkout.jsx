
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({text}) => <div>{text}</div>

const Checkout = () => {

    const defaultProps = {
        center: {
            lat: 10.998356902,
            lng: 77.01502627,
        },
        zoom: 11
    };

    return (
        <div>
            <div className="container">
                <h1>This is checkout Page</h1>
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col" style={{height: '100vh', width: '100%'}}>
                        {/* <GoogleMapReact
                            bootstrapURLKeys={{key: ""}}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />

                        </GoogleMapReact> */}
                    </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default Checkout;