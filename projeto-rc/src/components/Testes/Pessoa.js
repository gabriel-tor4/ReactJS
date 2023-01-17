function Pessoa({foto, name,  idade, profissao}){
    return(
        <div>
            <img src={foto} alt = {name}></img>
            <h2>
                Nome: {name}
            </h2>
            <p>
                idade:{idade}
                profissão:{profissao}
            </p>
        </div>
    )
}
export default Pessoa