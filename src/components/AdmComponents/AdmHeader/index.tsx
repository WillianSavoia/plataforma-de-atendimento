/* eslint-disable @next/next/no-img-element */

import styles from './styles.module.scss'
import { BiSun, BiMoon } from 'react-icons/bi'
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'
import { SwitchInput } from '../../SwitchMode'

export function AdmHeader () {
    const {theme} = useContext(ThemeContext)
    return(
        <>
        
        <header className={`${styles.header} ${styles[theme]}`}>
        <div className={styles.account}>
        <div className={styles.switch}><BiSun size={25}/><SwitchInput /><BiMoon size={25} /></div>
        <div className={styles.information}>
        <span className={styles.name}>Willian Veiga Sanches Savoia</span>
        <p className={styles.email}>williansanchessavoia@gmail.com</p>

        </div>
            <div className={styles.picture}><img src="https://github.com/WillianSavoia.png" alt="Avatar" className={styles.avatar} /></div>
            
        </div>

        </header>
        
        </>
    )
}