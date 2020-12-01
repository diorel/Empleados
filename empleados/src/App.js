import React, { Fragment ,useState,useEffect } from 'react';
import swal from 'sweetalert';
import Formulario from  './componentes/Formulario'
import Dato from  './componentes/Dato';


function App() {

   // Altas en local storage
    let altasIniciales = JSON.parse(localStorage.getItem('altas'));
      if(!altasIniciales) {
        altasIniciales = [];
      }
    
   // Arreglo de altas
  const [altas, guardarAltas] = useState(altasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let altasIniciales = JSON.parse(localStorage.getItem('altas'));

    if(altasIniciales) {
      localStorage.setItem('altas', JSON.stringify(altas))
    } else {
      localStorage.setItem('altas', JSON.stringify([]));
    }
  }, [altas] );


  // Funcion que tome las altas actuales y agregue una nueva
  const crearAlta = alta => {
    guardarAltas([ ...altas, alta ]);
  }

  // Función que elimina una alta por su id
  const eliminarAlta = id => {
    const nuevasAltas = altas.filter(alta => alta.id !== id );
    guardarAltas(nuevasAltas);
    mostrarAlertaBorrado();
 }

   // alerta OK guardar empleado
   const mostrarAlertaBorrado=()=>{
    swal({
      title: "Eliminado",
      text: "Baja de empleado correcta",
      icon: "warning",
      button: "Aceptar"      
    });
  }
 // Mensaje condicional
 const titulo = altas.length === 0 ? 'No hay empleados' : 'Administra tus Empleados';
  return (
    <Fragment>
    <h1>Administrador de Empleados</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
         <Formulario 
          crearAlta={crearAlta}
         />
        </div>
        <div className="one-half column">
           <h2>{titulo}</h2>
           {altas.map(alta =>(
             <Dato
                key={alta.id}
                dato={alta}
                eliminarAlta={eliminarAlta}   
              />
           ))}
        </div>
      </div>
    </div> 
    </Fragment>
  );
}

export default App;
