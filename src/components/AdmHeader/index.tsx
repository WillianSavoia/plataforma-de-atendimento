/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from './styles.module.scss'

export function AdmHeader () {
    return(
        <>
        <header className={styles.header}>
            <img src="https://github.com/WillianSavoia.png" alt="Avatar" className={styles.avatar} />
        </header>
        </>
    )
}