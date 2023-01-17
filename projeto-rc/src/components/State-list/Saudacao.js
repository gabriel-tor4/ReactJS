function Saudacao({ nome }) {
    
    function gerarSaudacao(N){
        return `Olá,${N} tudo bem ?`
    }
    
    return (<>

        {nome && <p>{gerarSaudacao(nome)}</p>}

    </>)
} export default Saudacao