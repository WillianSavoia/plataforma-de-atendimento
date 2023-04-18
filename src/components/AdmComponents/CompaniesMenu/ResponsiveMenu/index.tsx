import { ActiveLink } from '../../../ActiveLink';
import styles from './styles.module.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {useContext, useState} from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import { FiMenu } from 'react-icons/fi';
import { AdmSideBarResponsive } from '../../AdmSideBar/AdmSideBarResponsive';


export function ResponsiveMenu() {

    const [openMenu, setIsOpenMenu] = useState(false);

    const {theme} = useContext(ThemeContext);
    
    return (
        <>

                <FiMenu size={40} className={styles.svg} onClick={() => setIsOpenMenu(true)}/>

                <div className={`${styles.container} ${styles[theme]}`}
                style={{opacity: openMenu === true ? '1' : '0',
                transform: openMenu === true ? 'scaleX(1)' : 'scaleX(0)'}}>
                    <AdmSideBarResponsive/>

                        <AiOutlineCloseCircle className={styles.svg2} size={40}onClick={() => setIsOpenMenu(false)}/>
                    
                    <div className={styles.header}>
                        
                        <h1>EMPRESAS</h1>

                    </div>

                    <div className={styles.content}> 

                        <ActiveLink href="/user/adm/companies/create" activeClassName={styles.active}><a>Cadastrar empresa </a></ActiveLink>
                        <ActiveLink href="/user/adm/companies/edit" activeClassName={styles.active}><a>Editar empresa </a></ActiveLink>
                        <ActiveLink href="/user/adm/companies/delete" activeClassName={styles.active}><a> Excluir empresa </a></ActiveLink>






                    </div>
                </div>
        </>
    )
}