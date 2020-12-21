import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker } from 'pigeon-maps';
import { receiveISSLocation } from '../action';

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;

    getCurrentISSLocation()
  }
  render() {
    const { latitude, longitude } = this.props;
    const CENTER_OF_COORDINATE = 0;
    return (
      <div className ='map'>
        <Map
        center={ [ CENTER_OF_COORDINATE, CENTER_OF_COORDINATE ] }
        defaultWidth={ 700 }
        height={ 450 }
        minZoom={ 1 }
        maxZoom= { 8 }
        zoom={ 1 }
        >
          <Marker anchor={ [latitude, longitude ] } />
        </Map>
      </div>
    )
  }
}

const mapStateToProps = ({ issLocation: { latitude, longitude }}) => ({ 
  latitude,
  longitude,
})

const mapDispatchToProps = (dispatch) => ({
getCurrentISSLocation: () => dispatch(receiveISSLocation())
})

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);