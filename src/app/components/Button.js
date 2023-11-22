// import React, { useState } from "react";
import React from 'react';

export default function Button() {
  const [background, setBackground] = useState("white");

  const handleClick = () => {
    setBackground("green");
  };

  return (
    <button
      style={{ backgroundColor: background }}
      onClick={handleClick}
    >
      Cambiar color de fondo
    </button>
  );
}