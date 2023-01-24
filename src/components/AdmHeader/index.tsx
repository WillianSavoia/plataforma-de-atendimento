/* eslint-disable @next/next/no-img-element */
import { SearchBox } from './searchBox'
import styles from './styles.module.scss'

export function AdmHeader () {
    return(
        <>
        <header className={styles.header}>
        <div className={styles.account}>
        <div className={styles.information}>
        <span className={styles.name}>Willian Veiga Sanches Savoia</span>
        <p className={styles.email}>williansanchessavoia@gmail.com</p>
        </div>
            <div className={styles.picture}><img src="https://github.com/WillianSavoia.png" alt="Avatar" className={styles.avatar} /></div>
            
        </div>

        <SearchBox />
        </header>
        </>
    )
}