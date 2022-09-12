import './IngressoComponent.css';

function IngressoComponent(props) {
    return (
      <div>
        <li>
            {props.tipo} : R$ {props.preco}
        </li>
      </div>
    );
  }

  export default IngressoComponent;