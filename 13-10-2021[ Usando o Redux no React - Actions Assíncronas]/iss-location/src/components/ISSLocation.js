import React, { Component } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';
import { connect } from 'react-redux';
import ISSCrew from './ISSCrew';
import { getCurrentISSCrew } from '../services/issAPI';
import Coordinates from './Coordinates';
import { getISSLocationThunk } from '../actions';

class ISSLocation extends Component {
  componentDidMount() {
    const ONE_SECOND = 1000;
    const { getISSLocation } = this.props;
    setInterval(() => getISSLocation(), ONE_SECOND);
    getCurrentISSCrew().then((response) => console.log(response));
  }

  render() {
    const { latitude, longitude } = this.props;

    return (
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 20 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } />
          </Map>
          <div className="map-crew">
            <ISSCrew />
          </div>
        </div>
        <Coordinates latitude={ latitude } longitude={ longitude } />
      </main>
    );
  }
}

// Passando as coordenadas da API ISS para o marker(ponteiro ) e as coordenatas(texto do front)
const mapStateToPorps = (state) => ({
  latitude: state.issLocation.latitude,
  longitude: state.issLocation.longitude,
});

const mapDispatchToProps = (dispatch) => ({
  getISSLocation: () => dispatch(getISSLocationThunk()),
});
export default connect(mapStateToPorps, mapDispatchToProps)(ISSLocation);
