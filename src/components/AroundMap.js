import React from 'react';
//import {  } from "react-google-maps";

const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} = require("react-google-maps");

class AroundMap extends React.Component {
    state = {
        isOpen: false,
    }

    onToggleOpen = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }
    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker
                    position={{ lat: -34.397, lng: 150.644 }}
                    onClick={this.onToggleOpen}
                >
                    {this.state.isOpen ?
                        <InfoWindow onCloseClick={this.onToggleOpen}>
                        <div>text</div>
                    </InfoWindow> : null}
                </Marker>
            </GoogleMap>
        );
    }
}

export const WrappedAroundMap = withScriptjs(withGoogleMap(AroundMap));