import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  }
  
  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí puedes enviar los datos del formulario al backend para crear un nuevo registro en la base de datos
    console.log(nombre, edad);
    
    // Limpia los campos del formulario
    setNombre('');
    setEdad('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={handleNombreChange} placeholder="Nombre" />
      <input type="number" value={edad} onChange={handleEdadChange} placeholder="Edad" />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default Formulario;
