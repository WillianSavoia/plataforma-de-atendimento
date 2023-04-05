import Link from 'next/link'
import styles from './styles.module.scss'

export function HomeFooter () {
    return(
        <footer className={styles.container}>
            <div className={styles.services}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/resources" className={styles.link}>Recursos</Link>
            </div>
            <div className={styles.services}>
                <Link href="/clients" className={styles.link}>Clientes</Link>
                <Link href="/register" className={styles.link}>Cadastro</Link>
            </div>
            <div className={styles.copyright}>
                <span>Desenvolvido por: &copy; Willian Veiga Sanches Savoia, 2023</span>
            </div>
        </footer>
    )
}