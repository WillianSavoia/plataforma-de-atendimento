import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ActiveLink } from '../ActiveLink';
import { SwitchInput } from '../SwitchMode';
import styles from './styles.module.scss';

export function Header(){
  const {theme} = useContext(ThemeContext)
    return(
        <>
        <div>
        <header className={`${styles.container} ${styles[theme]}`}>
            <div className={styles.content}>
            <h1 className={styles.title}>Plataforma de Atendimento</h1>
            <div><SwitchInput /></div>
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
        </div>
        </>
    )
}