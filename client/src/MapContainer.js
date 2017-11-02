import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Map extends React.Component {
    loadMap() {
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.maps;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom= 14;
            let lat = 47.607738;
            let lng = -122.335473;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
        }
    }
    render () {
        return (
            <div ref='map'>
                Loading dat map...
            </div>
        )
    }
}

export class Container extends React.Component {
    render () {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div>
                <Map google={this.props.google} />
            </div>
        )
    }
}

// export default GoogleApiComponent({
//     apiKey: (AIzaSyBcu94SKa68HcWcQr1YhZF_mXDI09WIfmQ)
// })(Container)





//             <Map google={this.props.google} zoom={7}>

//                 Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />

//                 <InfoWindow onClose={this.state.onInfoWindowClose}>
//                     <div>
//                         <h1>{this.state.selectedPlace.name}</h1>
//                     </div>
//                 </InfoWindow>
//             </Map>
//         );
//     }
// }
export default MapContainer({
    apiKey: (AIzaSyBcu94SKa68HcWcQr1YhZF_mXDI09WIfmQ)
}) (MapContainer);
