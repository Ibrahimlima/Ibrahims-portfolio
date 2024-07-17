
import Mytimeline from '../elements/Mytimeline'
import styles from './Aboutme.module.css'


function Aboutme(){
    return(
        <div className={styles.aboutme}>
            <h1>Sobre Mim</h1>
            <div>  
                <Mytimeline/>          
            </div>
        </div>
    )
}

export default Aboutme