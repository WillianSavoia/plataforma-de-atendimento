import { ActiveLink } from '../ActiveLink'

import styles from './admOptions.module.scss'

import {BiSitemap} from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa'
import {BsGear} from 'react-icons/bs'
import {RiLockPasswordLine} from 'react-icons/ri'
import {TbWebhook, TbTemplate} from 'react-icons/tb'


export function AdmOptionsMenu(){
    return(
        <>
        <div className={styles.container}>
        <h1><div><BsGear size={20}/></div>CONFIG</h1>

           <div className={styles.content}> 
          
           <ActiveLink href="/user/adm/admconfig/whatsapp" activeClassName={styles.active}><a><div><FaWhatsapp size={20} /></div> Cadastrar WhatsApp </a></ActiveLink>
           <ActiveLink href="/user/adm/admconfig/domain" activeClassName={styles.active}><a><div><BiSitemap size={20} /></div> Subdomínio </a></ActiveLink>
           <ActiveLink href="/user/adm/admconfig/templates"activeClassName={styles.active}><a><div><TbTemplate size={20}/></div> Templates</a></ActiveLink>
           <ActiveLink href="/user/adm/admconfig/webhook"activeClassName={styles.active}><a><div><TbWebhook size={20}/></div> Webhooks</a></ActiveLink>
           <ActiveLink href="/user/adm/admconfig/password" activeClassName={styles.active}><a><div><RiLockPasswordLine size={20} /></div> Alterar Senha </a></ActiveLink>
           
       
       
        </div>
        </div>
        </>
    )
}

