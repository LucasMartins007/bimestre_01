import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import EventoComponent from './components/Evento/EventoComponent';
import IngressoComponent from './components/Ingressos/IngressoComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventoComponent 
          nome='Gustavo Lima' 
          data='18h30 - 00h00'
          local='Parque do Povo'
          cidade='Campina Grande'
          genero='Arte em forma de SERTANEJO' 
    /> 
    <IngressoComponent tipo='Camarote (open bar)' preco='150,00' />
    <IngressoComponent tipo='Camarote' preco='100,00' />
    <IngressoComponent tipo='Front-stage' preco='60,00' />
    <IngressoComponent tipo='Pista' preco='30,00' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
