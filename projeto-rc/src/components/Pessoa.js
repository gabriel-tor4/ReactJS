function Pessoa(props){
    return(
        <div>
            <img src={props.foto} alt = {props.name}></img>
            <h2>
                Nome: {props.name}
            </h2>
            <p>
                idade:{props.idade}
                profissão:{props.profissao}
            </p>
        </div>
    )
}
export default Pessoa