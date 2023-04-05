import styles from './styles.module.scss';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


export function Carrousel (){
    
    const {theme} = useContext(ThemeContext)

    const [move, setMove] = useState(false)
        return (
        <>
        <div className={`${styles.carrousel} ${styles[theme]}`}>
        <div className={styles.moveArrows}>
            { move !== false &&
                
                <div className={styles.left}>
            <AiOutlineLeftCircle size={30} onClick={() => setMove(false)}/>
            </div>}
            <div className={styles.right}>
            <AiOutlineRightCircle size={30} onClick={() => setMove(true)} />
            </div>
        </div>
        <div className={styles.content}>
        <h1>Plataforma de atendimento</h1>
        { move === false && 

            <p>Com objetivo de integrar uma plataforma de atendimento integrada com o whatsApp, foi desenvolvido com a mais
            alta tecnologia, tento como objetivo simplificar a forma de usar, possuindo layout simples, mas funcional.
            </p>

        }

        { move !== false && 
            <p>Com recursos exclusivos, ela entrega confiabilidade e simplicidade para uma melhor experiência para usuários
            e clientes.
            </p>
        }
        </div>
        
        
        </div>
     
        
        </>
    )
}
