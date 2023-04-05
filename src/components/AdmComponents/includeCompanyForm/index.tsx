import styles from './styles.module.scss'
import {FormEvent, useContext} from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { InputMaskCnpj } from '../InputMaskCnpj';

export function IncludeCompanyForm() {

    const {theme} = useContext(ThemeContext);
    
    function handleSubmit(event: FormEvent){
        event.preventDefault()
    }
    return(
        <>
            <div className={`${styles.form} ${styles[theme]}`}>
                <h1>Insira os dados Abaixo</h1>
                <form className={styles.formulary} onClick={handleSubmit}>
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
                        <span>CNPJ</span>
                        <InputMaskCnpj />
                    </div>
                    <div>
                        <span>Razão Social</span>
                        <input type="text" />
                    </div>
                    </div>
                    <div className={styles.elements}>
                    <div>
                        <span>Endereço</span>
                        <input type="text" name="Endereço" id="Endereço" />
                    </div>
                    <div>
                        <span>Número</span>
                        <input type="text" name="Address-number" id="Address-number" className={styles.addressNumber}/>
                    </div>
                    </div>
                        <button type="submit" className={styles.Button}>Enviar</button>
                    
                
                        <span className={styles.notice}>
                        Atenção: Após o envio dos dados, será enviado um E-mail para a confirmação dos dados.
                        </span>
                
                </form>
           
           </div> 
          
           
           </>
    )
}