import { IoLogoWhatsapp } from 'react-icons/io5'
import { CollaboratorHeader } from '../../CollaboratorHeader'
import styles from './styles.module.scss'

export function CollaboratorInactiveChat () {
    return(
        <>
        <CollaboratorHeader />
        <div className={styles.container}>
            <h1>Plataforma de Atendimento</h1>
            <IoLogoWhatsapp size={200} />
            <span>Monitore, responda ou inicie uma nova conversa via WhatsApp.</span>
        </div>
        </>
    )
}