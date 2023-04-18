import styles from './styles.module.scss'
import {FormEvent} from 'react'

import { InputMaskCnpj } from '../InputMaskCnpj';

export function IncludeCompanyForm() {

    
    
    function handleSubmit(event: FormEvent){
        event.preventDefault()
    }
    return(
        <>
            <div className={styles.form}>
                <h1>Insira os dados Abaixo</h1>
                <form className={styles.formulary} onClick={handleSubmit}>
                <div className={styles.elements}>
                    <div className={styles.divisions}>
                        <span>Nome</span>
                        <input type="name" />
                    </div>
                    <div className={styles.divisions}>
                        <span>E-mail</span>
                        <input type="email" name="E-mail" id="E-mail" />
                    </div>
                    </div >
                        <div className={styles.elements}>
                    <div className={styles.divisions}>
                        <span>CNPJ</span>
                        <InputMaskCnpj />
                    </div>
                    <div className={styles.divisions}>
                        <span>Razão Social</span>
                        <input type="text" />
                    </div>
                    </div>
                    <div className={styles.elements}>
                    <div className={styles.divisions}>
                        <span>Endereço</span>
                        <input type="text" name="Endereço" id="Endereço" />
                    </div>
                    <div className={styles.divisions}>
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