const Header = (props) => {
   
    const estilo = { color: 'red' }; 

    return (
        <div>
            <h1 style={estilo}>Olá, {props.nome}, seja bem-vindo!</h1>
        </div>
    );
};

export default Header;

Header.defaultProps = { 
     nome: 'Nome padrão', 
     };

