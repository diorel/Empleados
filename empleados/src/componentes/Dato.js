import React from 'react';
import  Map  from './Mapa';

const mapURl= "https://maps.googleapis.com/maps/api/js?key=AIzaSyC1XaJu1zg2_FXE5pmI8UaaVHgV-uW6Gqc";


const Dato = ({dato, eliminarAlta}) => (
   <div className="cita">
            <p>Nombre Empleado: <span>{dato.nombre}</span> </p>
            <p>Email: <span>{dato.email}</span> </p>
            <p>Fecha de Nacimiento: <span>{dato.fecha}</span> </p>
            <p>Calle: <span>{dato.calle}</span> </p>
            <p>Numero: <span>{dato.numero}</span> </p>
            <p>Colonia: <span>{dato.colonia}</span> </p>
             <p> Geolocalizacion de Empleado</p>
            <Map  
              googleMapURL={mapURl}  
              containerElement={<div style={{height:'250px'}} />}
              mapElement={<div style={{height:'100%'}} />}
              loadingElement= {<p>Cargando</p>}
              key={dato.id}
              geo={dato}          
            />
            <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarAlta(dato.id)  }
           >Eliminar &times;</button>
    </div>
);
export default Dato;