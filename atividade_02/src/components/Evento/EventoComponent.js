import './Evento.css';

function EventoComponent(props) {
    return (
      <div>
        <b>Nome:</b> {props.nome} <br/>
        <b>Data:</b> {props.data } <br/>
        <b>Local:</b> {props.local} <br/>
        <b>Cidade:</b> {props.cidade} <br/>
        <b>Gênero:</b> {props.genero} <br/>
      </div>
    );
  }

  export default EventoComponent;