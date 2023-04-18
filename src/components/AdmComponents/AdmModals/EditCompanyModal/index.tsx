import Modal from 'react-modal';
import styles from './styles.module.scss';
import { FormEvent, useContext, useState } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

interface EditCompanyModalProps{
    data: {
        nome: string;
        email: string;
        cnpj: string;
        rs: string;
        end: string;
        num: string;
        id: number;
    }
}

export function EditCompanyModal ({data}: EditCompanyModalProps) {

    const {theme} = useContext(ThemeContext);

    const [isOpen, setIsOpen] = useState(false);

    const [edit, setEdit] = useState(false);

    function HandleSubmit (event: FormEvent) {
        event.preventDefault();

    };
    

    return (
        <>

        <div 
        className={styles.title}
        onClick={() => setIsOpen(true)}>
            <span>
                {data.nome}
            </span>
        </div>
        
        
        <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel='Edit Company'
        className={`${styles.modal} ${styles[theme]}`}
        ariaHideApp={false}
        >
            <AiOutlineClose 
            size={20}
            className={styles.close}
            onClick={() => setIsOpen(false)}
            />
        {edit === false &&

                    <div className={styles.content}>
                    <li>Nome: {data.nome}</li>
                    <li>E-mail: {data.email}</li>
                    <li>CNPJ: {data.cnpj}</li>
                    <li>Razão Social: {data.rs}</li>
                    <li>Endereço: {data.end}</li>
                    <li>número: {data.num}</li>
                    <FiEdit2  className={styles.svg}
                    onClick={() => setEdit(true)}
                    size={25}/>
                </div>
        }

        

        {edit !== false &&
                
                <div className={styles.edit}>
                    <form onSubmit={HandleSubmit}>
                        
                        
                            <input type="name" placeholder='Nome' />
                             
                                    
                                        <input 
                                        type="email" 
                                        name="E-mail" 
                                        placeholder="E-mail" />
                                    
                                    
                                       
                                            <input 
                                            type="number" 
                                            name="CNPJ" 
                                            placeholder="CNPJ" />
                                       
                                    
                                        <input 
                                        type="text" 
                                        placeholder="Razão Social" />
                                    
                                
                                  
                                        
                                            <input 
                                            type="text" 
                                            name="Endereço" 
                                            placeholder="Endereço" />
                                        
                                    
                                        <input 
                                        type="text" 
                                        name="Address-number"
                                        placeholder="Endereço"
                                        />
                                    
                        
                        <div className={styles.btns}>
                            <button type="submit">Enviar</button>
                            <button onClick={() => setEdit(false)}>Cancelar</button>
                        </div>
                
                        
                        
                    </form>
                </div>
            
        }
        
        </Modal>
        </>
    )

}