/**
 * Created: Anderson Xavier,
 * Date: 19/06/2019,
 * Follow: @andersonx. 
 * Desafio: Rocketseat
 */

import React from 'react';
import MapViewDirections from 'react-native-maps-directions'

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="you-key" 
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;