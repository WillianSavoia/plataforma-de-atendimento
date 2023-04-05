import styles from './styles.module.scss'
import {FormEvent, useContext} from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { InputMaskRg } from '../InputMaskRg';
import { InputMaskCpf } from '../InputMaskCpf';
import { InputMaskCel } from '../InputMaskCel';

export function CreateNewCollaboratorForm() {

    const {theme} = useContext(ThemeContext);
    
    function handleSubmit(event: FormEvent){
        event.preventDefault()
    }
    return(
        <>

        
            <div className={`${styles.form} ${styles[theme]}`}>
            
           <form className={styles.formulary} onClick={handleSubmit}>
           <h1>Insira os dados Abaixo</h1>
           <div className={styles.elements}>
            <div>
           <span>Nome</span>
           <input type="name" />
            </div>
            <div>
            <span>E-mail</span>
            <input type="email" name="E-mail" id="E-mail" />
            </div>
            </div>
            <div className={styles.elements}>
            <div>
            <span>RG</span>
            <InputMaskRg />
            </div>
            <div>
            <span>CPF</span>
            <InputMaskCpf />
            </div>
            </div>
            <div className={styles.elements}>
            <div>
            <span>Número de Cadastro</span>
            <input type="tel" name="cadastro" id="cadastro" />
            </div>
            <div>
            <span>Celular</span>
            <InputMaskCel/>
            </div>
            </div>
            <button type="submit" className={styles.Button}>Enviar</button>
            
           
           
           </form>
           
           </div> 
          
           
           </>
    )
}