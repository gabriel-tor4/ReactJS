import styles from "./Frase.module.css"
function Frase(){

    return(
        <div className={styles.FraseContainer}>
           <p className={styles.FraseContent}> 
            Este é um comenent Frase
            </p> 
        </div>
    )
}
export default Frase