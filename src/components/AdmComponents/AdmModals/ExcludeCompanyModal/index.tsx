import { BiTrash } from 'react-icons/bi'
import styles from './styles.module.scss'
import Modal from 'react-modal'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext'

export function ExcludeCompanyModal() {

    const [isOpen, setIsOpen] = useState(false)


    const {theme} = useContext(ThemeContext);

    return (
        <>
        <BiTrash 
        size={25}
        className={styles.svg}
        onClick={() => setIsOpen(true)}
        />

        <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel='Excluir cia'
        className={`${styles.modal} ${styles[theme]}`}
        >
            <h2>Tem certeza?</h2>
            <span>A ação não poderá ser desfeita.</span>
            <div>
                <button>Excluir</button>
                <button onClick={() => setIsOpen(false)}>Cancelar</button>
            </div>
        </Modal>
        </>
    )
}