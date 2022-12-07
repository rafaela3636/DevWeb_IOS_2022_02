import propTypes from 'prop-types';

const BoasVindas = (props) => {
    return (
        <section>
            <h1 style = {{color: "blue"}}>Hello, {props,nome}, seja bem-vindo</h1>
            <p>Aguarde um instante</p>
        </section>
    )
}

BoasVindas.defaultPropd = {
    nome: 'Nome padrão',
};

BoasVindas.propTypes = {
    nome: propTypes.string,
};

export default BoasVindas
