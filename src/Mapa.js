import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'pink',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

// class Mapa extends React.Component {
function Mapa() {
    

    const [latitude, setLatitude] = useState(-23.55052);
    const [longitude, setLongitude] = useState(-46.633309);
   
    
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });
 

   
    const defaultProps = {
        center: {
            lat: latitude,
            lng: longitude
        },
        zoom: 6
    };
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <p>Onde eu estou!!! </p>
            <p>You latitude {latitude} </p>

            <p>You longitude {longitude} </p>


            <GoogleMapReact
            bootstrapURLKeys={{ key: "XXxxxxZZZ" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            >
                
                <AnyReactComponent
                    lat={latitude}
                    lng={longitude}
                    text="DTuX"
                />
                <AnyReactComponent
                    lat={-23.55052}
                    lng={-46.633309}
                    text="USER DEFAULT"
                />
            </GoogleMapReact>
        </div>
        );
}

 
export default Mapa;
