import styles from './styles.module.scss'
import {FormEvent, useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext'

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
            <input type="tel" name="telefone" id="telefone" placeholder="00.000.000-0" />
            </div>
            <div>
            <span>CPF</span>
            <input type="tel" name="CPF" id="CPF" placeholder="000.000.000-00" />
            </div>
            </div>
            <div className={styles.elements}>
            <div>
            <span>Número de Cadastro</span>
            <input type="tel" name="cadastro" id="cadastro" />
            </div>
            <div>
            <span>Celular</span>
            <input type="tel" name="Telefone" id="Telefone" placeholder="(00) 90000-0000"/>
            </div>
            </div>
            <button type="submit" className={styles.Button}>Enviar</button>
            
           
           
           </form>
           
           </div> 
          
           
           </>
    )
}