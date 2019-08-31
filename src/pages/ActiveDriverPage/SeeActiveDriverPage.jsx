import React from 'react';
import cx from 'classnames';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import styles from '../ActiveDriverPage/SeeActiveDriverPage.module.scss';

class SeeActiveRiders extends React.Component {
    
  render = () => {
    return (
    
        <div className={cx(styles.map)}>
        <Map google={this.props.google}  zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
      maps
      </div>
);
}
}

export default GoogleApiWrapper({
apiKey: ("AIzaSyCPiYgWKsF-bm_tRJMyqAO4ZANVQ1pnM7Q")
})(SeeActiveRiders)