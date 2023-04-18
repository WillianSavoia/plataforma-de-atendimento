/* eslint-disable @next/next/no-img-element */

import styles from './styles.module.scss'
import { BiSun, BiMoon } from 'react-icons/bi'
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext, useState } from 'react'
import { SwitchInput } from '../../SwitchMode'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Link from 'next/link'

export function AdmHeader () {
    const {theme} = useContext(ThemeContext);

    const [open, setOpen] = useState(false);
    return(
        <>
        
        <header className={`${styles.header} ${styles[theme]}`}>
        <div className={styles.account}>
        <div className={styles.switch}><BiSun size={25}/><SwitchInput /><BiMoon size={25} /></div>
        <div className={styles.information} onClick={() => {setOpen(true)}}>
        <span className={styles.name}>Willian Veiga Sanches Savoia</span>
        <p className={styles.email}>williansanchessavoia@gmail.com</p>

        </div>
            <div className={styles.picture}><img src="https://github.com/WillianSavoia.png" alt="Avatar" className={styles.avatar} /></div>
            
        </div>

        </header>

        <div className={styles.boxInfo}
        style={{display: open === true ? "flex" : "none",}}>
            <AiOutlineCloseCircle size={20} className={styles.svg} onClick={() => {setOpen(false)}}/>
            <div className={styles.info}>
                <span className={styles.name}>Willian Veiga Sanches Savoia</span>
                <p className={styles.email}>williansanchessavoia@gmail.com</p>
            </div>
            <div className={styles.links}>
                <Link href="/" className={`${styles.link} ${styles[theme]}`}>Sair</Link> 
                <Link href="/adm/editaccount" className={`${styles.link2} ${styles[theme]}`}>Editar Perfil</Link>
            </div>
        </div>
        
        </>
    )
}
