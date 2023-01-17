import { useState } from "react"

function Condicional(){
    const [Email, setEmail] = useState()
    const [UserEmail,SetUserEmail] = useState ()

    function enviarEmail(e){
        e.preventDefault()
        console.log("testando")
        SetUserEmail(Email)
        console.log(UserEmail)
    }      

    function LimparEmail(){
        SetUserEmail("")
    }
   
    return(
        <>
        <h2>
            Cadastr Seu Email
        </h2>
        <form>
            <input type= "email" placeholder="digite seu email" onChange={(e) => setEmail(e.target.value)}/>
        </form>
        <button onClick={enviarEmail}>Enviar</button>
        {UserEmail &&(
            <div>
            
                O Email do usuario é: {UserEmail}
                <p>
                <button onClick={LimparEmail}>Limpar Email</button>
                </p>
            </div>
            
        )}
        </>
    )
}
export default Condicional