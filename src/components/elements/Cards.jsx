import styles from './Cards.module.css'
import {useState} from 'react'
import Buttoncard from './Buttoncard'


function Card({site, img, title, tec, descr, rep}){


    const [info, setInfo] = useState(false)

    function infoOn(){
        setInfo(true)
    }

    function infoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={infoOff} className={styles.card}>
            
            <a onMouseEnter={infoOn} href={site}>
            <img src={img} alt= 'Error'/>
            </a>

            {info === true && (
                <section>
                <h2>{title}</h2>
                <p>{tec}</p>
                <p>{descr}</p>

                <Buttoncard text='Acesse o repositório' link={rep}/>
            </section>
            )}
            
        </div>
    )
}

export default Card