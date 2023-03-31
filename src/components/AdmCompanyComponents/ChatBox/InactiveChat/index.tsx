import { IoLogoWhatsapp } from 'react-icons/io5'
import { AdmCompanyHeader } from '../../../AdmCompanyComponents/AdmCompanyHeader'
import styles from './styles.module.scss'

export function InactiveChat (){
    return(
        <>
        <AdmCompanyHeader />
        <div className={styles.container}>
            <h1>Plataforma de Atendimento</h1>
            <IoLogoWhatsapp size={200} />
            <span>Monitore, responda ou inicie uma nova conversa via WhatsApp.</span>
        </div>
        </>
    )
}