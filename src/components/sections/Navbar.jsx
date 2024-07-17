import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NavLink from 'react-bootstrap/esm/NavLink';


function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><NavLink href="#projects">Projetos</NavLink></li>
                <li><NavLink href="#skills">Tecnologias</NavLink></li>
                <li><NavLink href="#aboutme">Sobre Mim</NavLink></li>
            </ul>
            <ul className={styles.links}>
                <li><a href="https://www.linkedin.com/in/bruno-barros-de-lima-66a122254/"><FaLinkedin size={30} /></a></li>
                <li><a href="https://github.com/Ibrahimlima"><FaGithub size={30} /></a></li>
            </ul>
        </div>
    )
}

export default Navbar