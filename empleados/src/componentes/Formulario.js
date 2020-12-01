import React, { Fragment, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import swal from 'sweetalert';



const Formulario =({crearAlta}) =>{

   // Crear State de altas
   const [alta, actualizarAlta] = useState({
        nombre: '',
        email: '',
        fecha: '',
        calle: '',
        numero: '',
        colonia: '',
        latitud: '',
        longitud: ''
    });


   // Crear State error
        const [ error, actualizarError ] = useState(false)

    // funcion para obtener geolocalizacion
        const obtenerCoordenadas=()=>{
            navigator.geolocation.getCurrentPosition(function(position){
                alta.latitud = position.coords.latitude;
                alta.longitud = position.coords.longitude;
            })
        }
        
    // Función que se ejecuta cada que el usuario escribe en un input
        const actualizarState = e => {    
            actualizarAlta({
                ...alta,
                [e.target.name]: e.target.value 
            })
        }


    // alerta OK guardar empleado
          const mostrarAlertaOK=()=>{
            swal({
              title: "OK",
              text: "Alta de empelado correcta",
              icon: "success",
              button: "Aceptar"      
            });
          }
    

        

    // Extraer los valores
        const { nombre, email, fecha, calle, numero, colonia} = alta;

        console.log(alta);
        obtenerCoordenadas();
   // cuando el usuario presiona  alta empleado
   const submitAlta = e => {
       e.preventDefault();
     
      


   // validar campos
       if(nombre.trim() === '' || email.trim() === ''  || fecha.trim() === ''  || calle.trim() === ''  || numero.trim() === ''|| colonia.trim() === ''){
        actualizarError(true);
        return;
    } 
     // notificacion alta
     mostrarAlertaOK();

    // Eliminar el mensaje previo 
       actualizarError(false);

    // Asignar un ID
       alta.id = uuidv4();

    // Crear alta
       crearAlta(alta);

     // Reiniciar el form
        actualizarAlta({
           nombre: '',
            email: '',
            fecha: '',
            calle: '',
            numero: '',
            colonia: ''
        })

   }

    

    return(
     <Fragment>
        <h2>Alta de Empleado</h2>
        { error ? <p className="alerta-error">Todos los campos son obligatorios</p>     : null }
        <form
          onSubmit={submitAlta}
        >
        <label>Nombre</label>
            <input 
                type="text"
                name="nombre"
                className="u-full-width"
                placeholder="Nombre Empleado"
                onChange={actualizarState}
                value={nombre}
               
            />

            <label>email</label>
            <input 
                type="text"
                name="email"
                className="u-full-width"
                placeholder="Correo electronico"  
                onChange={actualizarState}
                value={email}
            />

            <label>Fecha de Naciemiento</label>
            <input 
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
        
            />
            <h5>Direccion</h5> 
            <label>Calle</label>
                <input 
                    type="text"
                    name="calle"
                    className="u-full-width"
                    placeholder="Calle del Empleado" 
                    onChange={actualizarState}
                    value={calle} 
                />

            <label>Numero</label>
                <input 
                    type="text"
                    name="numero"
                    className="u-full-width"
                    placeholder="Numero de casa" 
                    onChange={actualizarState}
                    value={numero} 
                />

             <label>Colonia</label>
                <input 
                    type="text"
                    name="colonia"
                    className="u-full-width"
                    placeholder="Colonia" 
                    onChange={actualizarState}
                    value={colonia} 
                />


                
    
               <button
                    type="submit"
                    className="u-full-width button-primary"
                >Alta Empleado</button>

        </form>


     </Fragment>

        
    );
}


export default Formulario;