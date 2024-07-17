import styles from './Mytimeline.module.css'
import {useState} from 'react'

function Mytimeline(){

  const [info, setInfo] = useState(false)

  function infoOn(){
      setInfo(true)
  }

  function infoOff(){
      setInfo(false)
  }

  return (
    <div className={styles.mytimeLine}>
      <div onMouseLeave={infoOff} className={styles.lineArea}>

        <div onMouseEnter={infoOn}  className={styles.singleItem}>
          <span>2017</span>

          {info === true && (
          <div className={styles.textArea}>
            <p>Me formei em Psicologia</p>
          </div>
          )}
        </div> 
        <div onMouseLeave={infoOff} className={styles.singleItem}>
          <span onMouseEnter={infoOn}>2019</span>

          {info === true && (
          <div className={styles.textArea}>
            <p>Conclui minha pós-graduação em Psicologia Hospitalar</p>
          </div>
          )}
        </div>
        <div onMouseLeave={infoOff} className={styles.singleItem}>
          <span onMouseEnter={infoOn}>2022</span>

          {info === true && (
          <div className={styles.textArea}>
            <p>Decidi mudar de carreira e seguir um antigo desejo de explorar a área da tecnologia</p>
          </div>
          )}
        </div>
        <div onMouseLeave={infoOff} className={styles.singleItem}>
          <span onMouseEnter={infoOn}>2023</span>

          {info === true && (
          <div className={styles.textArea}>
            <p>Comecei a procurar sobre cursos na área da programação</p>
          </div>
          )}
        </div>

        <div onMouseLeave={infoOff} className={styles.singleItem}>
          <span onMouseEnter={infoOn}>Presente</span>

          {info === true && (
          <div className={styles.textArea}>
            <p>Estou aprendendo e me desenvolvendo cada vez mais para me tornar um desenvolvedor Full-Stack</p>
          </div>
          )}
        </div>        
      </div>
    </div>
  );
};

export default Mytimeline