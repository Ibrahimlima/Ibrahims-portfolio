import styles from './Footer.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){

    
    return(
        <div className={styles.footer}>
            <div>
                <h3>Meu Contato:</h3>
                <p>51-98335-1727 / 21-98197-1808</p>
            </div>
            <div>
                <h3>E-mail:</h3>
                <p>brunob.ibrahimlima@gmail.com</p>
            </div>
            <ul className={styles.links}>
                <li><a href="https://www.linkedin.com/in/bruno-barros-de-lima-66a122254/"><FaLinkedin size={30} /></a></li>
                <li><a href="https://github.com/Ibrahimlima"><FaGithub size={30} /></a></li>
            </ul>
        </div>
    )
}

export default Footer