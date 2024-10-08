import styles from './Projects.module.css'
import Card from '../elements/Cards'
import Button from '../elements/Button';
import arqt from '../../assets/Projects/arquiteturadnc.svg'
import ccxp from '../../assets/Projects/ccxpdnc.svg'
import lndpg from '../../assets/Projects/landingpagednc.svg'
import tabu from '../../assets/Projects/tabuadadnc.svg'
import weather from '../../assets/Projects/weatherdnc.svg'
import portf from '../../assets/Projects/portfoliotestednc.svg'
import portfB from '../../assets/Projects/portfolioBruno.svg'
import portfI from '../../assets/Projects/ibahimportf.svg'
import todoList from '../../assets/Projects/todolist.svg'

function Projects(){
    return(
        <div className={styles.projects}>
             <h1>Projetos</h1>
             <div className={styles.divcards} id='projects'>
                <Card 
                site='https://ibrahimproject1dnc.netlify.app/'
                img={lndpg}
                title='Landing-Page DNC'
                tec= 'HTML / CSS / JS'
                descr='Este é o projeto de desenvolvimento do módulo base do curso de tecnologia da escola DNC. Foi criada uma landing-page da DNC.'
                rep='https://github.com/Ibrahimlima/Projeto-Lading-Page'
                />
                <Card 
                site='https://arquiterurasdncibrahim.netlify.app/'
                img={arqt}
                title='Empresa de Arquitetura'
                tec='HTML / CSS'
                descr='Este projeto foi feito para o "Desafio nº 1" durante o curso da DNC. Sendo criada um site de uma empresa de arquitetura.'
                rep='https://github.com/Ibrahimlima/Arquitetura'
                />
                <Card 
                site='https://github.com/Ibrahimlima/Portfolio_teste'
                img={portf}
                title='Portfólio teste'
                tec='HTML / CSS'
                descr='Este projeto foi feito durante o curso da DNC. Criação de um molde para um portfólio de uma programadora.'
                rep='https://github.com/Ibrahimlima/Portfolio_teste'
                />
                <Card 
                site='https://tabuadamultdnc.netlify.app'
                img={tabu}
                title='Tabuada'
                tec='HTML / CSS / JS'
                descr='Este projeto foi feito durante o curso da DNC. Criação de uma tabuada interativa, que é capaz de apresentar todos os valores requisitados de forma rápida.'
                rep='https://github.com/Ibrahimlima/TabuadaMultiplicacao'
                />
                <Card 
                site='https://ccxp2022dnc.netlify.app'
                img={ccxp}
                title='CCXP'
                tec='HTML / CSS / JS'
                descr='Este projeto foi feito durante o curso da DNC. Criação de um site apresentando o evento da CCXP de 2022(cronometro referente a outra data).'
                rep='https://github.com/Ibrahimlima/CCXP2022DNC'
                />
                <Card 
                site='https://to-do-list-ibrahims.vercel.app'
                img={todoList}
                title='Lista de Tarefas'
                tec='HTML / CSS / JS'
                descr='Este projeto foi criado durante o curso de Desenvolvedor Full-Stack da DNC. Neste site, você pode criar uma lista de tarefas para seu dia, sendo capaz de ver todas elas, as concluídas e não concluídas, bem como uma progressão de quantas você já concluiu naquele dia. podendo inclusive altera-la livremente.'
                rep='https://github.com/Ibrahimlima/To-do-list'
                />            
                <Card 
                site='https://ibrahimweatherdnc.netlify.app'
                img={weather}
                title='Weather DNC'
                tec='HTML / CSS / JS'
                descr='Este projeto foi feito para o "Desafio nº 2" durante o curso da DNC. Sendo criado um site capaz de apresentar as informações de cep e temperatura de locais especificado.'
                rep='https://github.com/Ibrahimlima/WeatherDNC'
                />
                <Card 
                site='https://meu-portfolioibrahim.vercel.app/'
                img={portfB}
                title='Portfólio'
                tec='HTML / CSS / JS / REACT'
                descr='Este projeto foi feito durante o curso da DNC. Sendo criado este portfólio.'
                rep='https://github.com/Ibrahimlima/meu-portfolio'
                />
                <Card 
                site='https://ibrahim-portf.vercel.app'
                img={portfI}
                title='Ibrahim`s Portfólio'
                tec='HTML / CSS / JS / REACT / VITE'
                descr='Este projeto foi feito para o "Desafio nº 3" durante o curso da DNC. Este projeto foi feito durante o curso da DNC. Sendo criado meu portfólio oficial.'
                rep='https://github.com/Ibrahimlima/Ibrahims-portfolio'
                />                                
            </div>
            <div className={styles.projbtn}>
            <Button link={'https://github.com/Ibrahimlima'} text={'Conecte-se comigo!!'}/>
            </div>
            
        </div>
    )
}

export default Projects