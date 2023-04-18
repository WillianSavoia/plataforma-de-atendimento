import { ActiveLink } from '../../../ActiveLink'
import {useContext, useState} from 'react'

import styles from './styles.module.scss'

import { FiMenu } from 'react-icons/fi'
import { ThemeContext } from '../../../../context/ThemeContext'
import { AdmSideBarResponsive } from '../../AdmSideBar/AdmSideBarResponsive'
import { AiOutlineCloseCircle } from 'react-icons/ai'


export function AdmOptionsResponsiveMenu(){
    const {theme} = useContext(ThemeContext);

    const [openMenu, setIsOpenMenu] = useState(false);
    return(
        <>

        <FiMenu size={40} className={styles.svg} onClick={() => setIsOpenMenu(true)}/>

        <div className={`${styles.container} ${styles[theme]}`}
        style={{opacity: openMenu === true ? '1' : '0',
        transform: openMenu === true ? 'scaleX(1)' : 'scaleX(0)'}}>

    
            <AdmSideBarResponsive/>

            <AiOutlineCloseCircle className={styles.svg2} size={40}onClick={() => setIsOpenMenu(false)}/>

            <div className={styles.header}>
                <h1>CONFIG</h1>
            </div>

           <div className={styles.content}> 
          
           <ActiveLink href="/user/adm/admconfig/whatsapp" activeClassName={styles.active}><a> Cadastrar WhatsApp </a></ActiveLink>
           <ActiveLink href="/user/adm/admconfig/domain" activeClassName={styles.active}><a> Subdomínio </a></ActiveLink>
           <ActiveLink href="/user/adm/admconfig/templates"activeClassName={styles.active}><a> Templates</a></ActiveLink>
           <ActiveLink href="/user/adm/admconfig/webhook"activeClassName={styles.active}><a>Webhooks</a></ActiveLink>
           <ActiveLink href="/user/adm/admconfig/password" activeClassName={styles.active}><a>Alterar Senha </a></ActiveLink>
           
       
       
        </div>
        </div>
        </>
    )
}

//arrumar o switch que está passando por cima do responsivo!!

