/**
 * Created: Anderson Xavier,
 * Date: 19/06/2019,
 * Follow: @andersonx. 
 * Desafio: Rocketseat teste github
 */

import React from 'react';
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyCnsPXwkw6NxRK-0H4laGBORSJqB7zcBpk"
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;