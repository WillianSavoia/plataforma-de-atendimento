import Head from 'next/head';
import styles from './styles.module.scss';

import { FormEvent } from 'react'

export default function forgotPassWord() {


    function handleSubmit (event: FormEvent){
        event.preventDefault();
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>Plataforma | Recuperar Senha</title>
            </Head>
            <h1>Recuperar a senha</h1>
            <form onSubmit={handleSubmit}>
               <div>
                    <label>E-mail</label>
                    <input type="email" />
                    <label>Confirmar E-mail</label>
                    <input type="email"/>
               </div>
                <button type="submit">
                    Enviar
                </button>
                <span>Um Link será enviado para o seu e-mail para recuperar a senha.</span>
            </form>
        </div>
    )
}