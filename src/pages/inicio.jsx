import React from 'react';
import '../css/inicio.css'; // Importar o arquivo CSS de estilos
import { useNavigate } from 'react-router-dom';

function inicio() {
    const irPara= useNavigate();
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClick = () => {
    // Navegar para a página Home ao clicar em algum botão
    irPara('/');
  };

  return (
    <div>
      <header>
        <h1>Meu Portfólio</h1>
        <button onClick={handleClick}>Ir para Capa</button>
        <nav>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section className="presentation">
        <div className="container">
          <h2>Olá, eu sou [Seu Nome]</h2>
          <p>Desenvolvedor Front-end apaixonado por criar experiências web incríveis.</p>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <h2>Meus Projetos</h2>
          <div className="project">
            <img src="project1.jpg" alt="Projeto 1" />
            <h3>Projeto 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo justo in blandit pretium.</p>
            <a href="#">Ver mais</a>
          </div>
          <div className="project">
            <img src="project2.jpg" alt="Projeto 2" />
            <h3>Projeto 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo justo in blandit pretium.</p>
            <a href="#">Ver mais</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Meu Portfólio</p>
          <ul>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default inicio;
