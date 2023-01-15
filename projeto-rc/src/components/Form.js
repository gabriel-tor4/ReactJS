import {useState} from 'react'

function Form(){
   
    function CadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log("cadastrou o Usuario")
        console.log(`Usuario: ${name} `)
        console.log(`Senha: ${password}`)
    }
   
    const[name, setName ] = useState("gabriel") 
    const[password, setPassword] = useState ()

    return(
        <>
        <h1>
            Meu Cadastro
        </h1>
        <form onSubmit = {CadastrarUsuario}>
            <div>
                <label htmlFor ="name" >nome: </label>
                <input 
                type = "text" 
                id = "name" 
                placeholder = "Digite o seu nome"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                >

                </input>
            </div>
            <div>
                <label htmlFor = "password">Senha: </label>
                <input  
                type = "password" 
                placeholder = "digite a senha"
                onChange={(e) => setPassword(e.target.value)}
                >
                </input>
            </div>
            <div>
                <input 
                type = "submit" 
                value = "cadastrar"
                 >
                </input>
            </div>
            

        </form>
        </>
    )
}
export default Form