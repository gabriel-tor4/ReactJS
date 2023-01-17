function OutraLista({ itens }) {
    return (
        <>
            <h3>
                Listas de coisa boas
            </h3>
            {
                itens.lenght > 0 ? (
                    itens.map((item, index) => <p key={index}>{item}</p>)
                )
                    : (
                        <p>Não há itens na lista</p>

                    )}
        </>
    )
}
export default OutraLista