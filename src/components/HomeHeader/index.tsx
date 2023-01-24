import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header(){
    return(
        <>
        <header className={styles.container}>
            <div className={styles.content}>
            <h1 className={styles.title}>Plataforma de Atendimento</h1>
              <div className={styles.links}>
              <ActiveLink activeClassName={styles.active} href="/">
                <a>Home</a>
              </ActiveLink>
              <ActiveLink href="/resources" activeClassName={styles.active}>
                <a>Recursos</a>
              </ActiveLink>
              <ActiveLink href="/clients" activeClassName={styles.active}>
                <a>Clientes</a>
              </ActiveLink>
              <ActiveLink href="/register" activeClassName={styles.active}>
                <a>Cadastro</a>
              </ActiveLink>
              </div>
            </div>
        </header>
        </>
    )
}