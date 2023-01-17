import Proptypes from 'prop-types'

function  Item(marca, ano_lancamento){
    return(
        <>
        <li>
            {marca},{ano_lancamento}
        </li>
        </>
    )


}

//DEFINIR O TIPO  DO PROPS 
Item.propsTypes = {
    marca: Proptypes.string.isRequired,
    ano_lancamento: Proptypes.number
}

//defiinir um valor default

Item.defaultProps={
    marca: "",
    ano_lancamento: 0
}


export default Item