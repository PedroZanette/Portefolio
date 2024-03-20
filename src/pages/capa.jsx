import React from 'react';
import '../css/capa.css'; // Importe o arquivo de estilos CSS
import { useNavigate } from 'react-router-dom';

function capa() {

  const irPara= useNavigate();
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClick = () => {
    // Navegar para a página Home ao clicar em algum botão
    irPara('/inicio');
  };

  return (
    <div className="cover">
    <div className="cover-content">
      <h1>Meu Portefólio</h1>
      <p>de 2024</p>
      <button onClick={handleClick}>Ir para Capa</button>
    </div>
  </div>
);
}

export default capa;
