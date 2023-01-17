function SeuNome({setnome}) {
    return (<>

        <div>
            <p>digite seu NOME:</p>
            <input type="text" placeholder="qual é seu nome:" onChange={(e) =>{setnome(e.target.value)}}  ></input>
        </div>


    </>)
} export default SeuNome