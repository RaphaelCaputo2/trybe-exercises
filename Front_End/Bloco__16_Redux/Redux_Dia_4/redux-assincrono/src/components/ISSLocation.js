import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker } from 'pigeon-maps';

class ISSLocation extends Component {
  render() {
    const dummyLat = 22.2;
    const dummyLong = -65.8;
    const dummyCoord = 0;
    return (
      <div className ='map'>
        <Map
        center={ [dummyCoord, dummyCoord] }
        defaultWidth={ 700 }
        height={ 450 }
        minZoom={ 1 }
        maxZoom= { 8 }
        zoom={ 1 }
        >
          <Marker anchor={ [dummyLat, dummyLong] } />
        </Map>
      </div>
    )
  }
}

export default ISSLocation;