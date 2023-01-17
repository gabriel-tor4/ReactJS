import Item from "./Item"
function list (){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca = "fiat" ano_lancamento ={1981}/>
                <Item marca = "uno" ano_lancamento = {1999}/>
                
            </ul>   
        </>
    )
}
export default list