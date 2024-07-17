import styles from './Buttoncard.module.css'

function Buttoncard({text, link}){
    return(
        <div>
            <a href={link}>
            <button className={styles.btn} > {text} </button>
            </a>

        </div>
    )
}
export default Buttoncard