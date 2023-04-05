import Head from 'next/head';
import styles from './styles.module.scss';

import { FormEvent, useState } from 'react'

export default function PasswordRecoveryPage () {
    
    const [password, setPassword] = useState("");

    const [newPassword, setNewPassword] = useState('');

    function handleSubmit (event: FormEvent) {
        event.preventDefault();


    }

    return(
        <>
            <Head>
                <title>Plataforma | Recuperar Senha</title>
            </Head>
            <div className={styles.container}>
                <h1>Recuperar Senha</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Digite a nova senha</label>
                        <input type="password"
                        required
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                        />
                        <label>Confirmar senha</label>
                        <input type="password"
                        required
                        value={newPassword}
                        onChange={(ev) => setNewPassword(ev.target.value)}
                        />
                        { password !== newPassword &&
                            
                            <span>As senhas precisam ser iguais.</span>

                        }
                    </div>
                    <button type='submit'
                    style={{cursor: password === newPassword ? "pointer" : "not-allowed",
                            opacity: password === newPassword ? "1" : '.5'}}
                    >Confirmar</button>
                </form>
            </div>
        </>
    )
}