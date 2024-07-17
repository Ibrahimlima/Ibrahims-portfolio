import styles from './Skills.module.css'
import js from '../../assets/skills/js.svg'
import html from '../../assets/skills/html.svg'
import css from '../../assets/skills/css.svg'
import react from '../../assets/skills/react.svg'




function Skills(){
    return(
        <div className={styles.skills} id="skills">
            <h1>Habilidades</h1>
            <h3>Conheça um pouco das minhas principais habilidades e conhecimentos.</h3>
            <div>
                <img src={html}/>
                <img src={css}/>
                <img src={js}/>
                <img src={react}/>

            </div>
        </div>
    )
}

export default Skills