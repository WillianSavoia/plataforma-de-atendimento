import styles from './styles.module.scss'
import {FormEvent} from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function SignInPage(){

    function handleSubmit(event: FormEvent){
        event.preventDefault();
    }


    return (
      <>
      <Head>
        <title>Plataforma | Login</title>
      </Head>
      <div className={styles.container}>
        <span className={styles.warning}>Não possui Conta? | <Link href="/register" className={styles.link}>Registre-se</Link></span>
      <div className={styles.title}>
        <h1>Plataforma de Atendimento</h1>
      </div>
      <form className={styles.signInForm} onSubmit={handleSubmit}>
        <span>E-mail</span>
        <input type="email" name="E-mail" id="Email" />
        <span>Senha</span>
        <input type="password" name="Password" id="Password" />
        <button type="submit">Entrar</button>
        <Link href="/forgot">Esqueci minha senha</Link>
      </form>
      </div>
      </>
    )
}