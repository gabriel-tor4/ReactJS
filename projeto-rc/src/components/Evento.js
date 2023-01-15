import Button from "./Eventos/Button"

function Evento(){

    function MeuEvento(){
        console.log("ativando Primeiro Evento")
        console.log("ativado")

    }
    
    function segundoEvento(){
        console.log("ativando o segundo evento")
    }

    return(
        <>
        <p>
            clique para desparar um Evento
        </p>
        <Button event = {MeuEvento} text ="Primeiro Evento"/>
        <Button event = {segundoEvento} text = "segundo Evento"/>
        <button onClick = {MeuEvento}>Click</button>
        </>
    )

}
export default Evento