import Link from "next/link";
import { InputMaskCnpj } from "../../components/AdmComponents/InputMaskCnpj";
import { Header } from "../../components/HomeHeader";

import styles from './styles.module.scss'
import { FormEvent } from "react";
import Head from "next/head";
import { HomeFooter } from "../../components/HomeFooter";

export default function register(){

    function handleSubmit (event: FormEvent){
        event.preventDefault();
    }
    return(
        <>

        <Head>
            <title>Plataforma | Registre-se</title>
        </Head>
        <Header />

        <div className={styles.container}>

            <span className={styles.account}>Já possui conta? | <Link  className={styles.link} href="/signin">Entrar</Link></span>
            <form onSubmit={handleSubmit}>
                <label>Nome</label>
                <input type="text" />
                <label>E-mail</label>
                <input type="email"  />
                <label>Razão Social</label>
                <input type="text" />
                <label>CNPJ</label>
                <InputMaskCnpj />
                
                <button type="submit">
                    Enviar
                </button>

            <span className={styles.warning}>Ao Confirmas os dados, será enviado um E-mail de solicitação ao administrador da plataforma, aguarde a resposta
                em seu E-mail.
            </span>

            </form>
        </div>
        <HomeFooter />
        </>
    )
}