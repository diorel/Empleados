import React from 'react';
import { GoogleMap,withScriptjs, withGoogleMap } from 'react-google-maps';

const Mapa =({props,geo})=>{
    var x = geo.latitud;
    var y = geo.longitud;
    return(
        <GoogleMap defaultZoom={18} 
          defaultCenter={{ lat: x , lng: y}}
        />
    );
}
export default withScriptjs(
    withGoogleMap(
        Mapa
    )
)