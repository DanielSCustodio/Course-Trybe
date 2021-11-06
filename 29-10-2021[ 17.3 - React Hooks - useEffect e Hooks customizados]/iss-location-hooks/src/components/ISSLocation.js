import React, { useEffect, useContext } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';
import Coordinates from './Coordinates';
import ISSContext from '../context/ISSContext';
import useTimer from '../hooks/useTimer';

function issLocationFuncional() {
  const { getISSLocation, latitude, longitude } = useContext(ISSContext);
  const ONE_SECOND = 1000;

  useTimer(getISSLocation, ONE_SECOND);

  useEffect(() => {
    document.title = new Date().toLocaleTimeString();
  });

  // useEffect(() => { equivalente ao componentWillUnmount
  //   return(()=>{
  //     codigo
  //   })
  // }, []);

  return (
    <div>
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 8 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } />
          </Map>
        </div>
        <Coordinates latitude={ latitude } longitude={ longitude } />
      </main>
    </div>
  );
}

export default issLocationFuncional;
