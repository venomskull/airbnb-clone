import { getCenter } from 'geolib';
import { useState } from 'react';
import ReactMapGL,{Marker, Popup} from 'react-map-gl';

function Map({searchResults}) {
    const [selectedLocation, setSelectedLocation] = useState({

    });
    

    // https://www.npmjs.com/package/geolib
    // Transform the search results object into the 
    // { latitude: 52.516272, longitude: 13.377722 } object
    const coordinates = searchResults.map(result => ({
        latitude: result.lat,
        longitude: result.long
    }))

    // The latitude and longitude  of the center of locations coordinates
    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });


    return (
        <ReactMapGL 
            mapStyle='mapbox://styles/dirosh/ckt4eptgg0sko17lplvd5h0jh'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
        >
            {/* https://visgl.github.io/react-map-gl/docs/api-reference/marker
            https://visgl.github.io/react-map-gl/docs/api-reference/popup */}

            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker longitude={result.long} latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        {/* emoji */}
                        <p className='cursor-pointer text-2xl animate-bounce'
                            role="img"
                            aria-label="push-pin"
                            onClick={() => setSelectedLocation(result)}
                        >
                            📌
                        </p>
                    </Marker>

                    {/* The popup that should show if we click on a Marker */}
                    {selectedLocation.long ===  result.long ? (
                        <Popup onClose={() => setSelectedLocation({})} latitude={result.lat} longitude={result.long} 
                            closeOnClick={true}
                        >
                            {result.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}

        </ReactMapGL>
        
    )
}

export default Map
