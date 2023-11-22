
import React from 'react';

const Lista = ({ registros }) => {
  return (
    <ul>
      {registros.map((registro) => (
        <li key={registro.id}>{registro.nombre} - {registro.edad} años</li>
      ))}
    </ul>
  );
}

export default Lista;
