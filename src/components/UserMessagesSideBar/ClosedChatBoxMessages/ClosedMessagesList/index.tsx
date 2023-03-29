/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

import { AiOutlineCheckCircle } from 'react-icons/ai'

interface MessageListProps {
  active?: boolean;
  onClick: () => void;
  data: {
    chatId: number;
    name: string;
    author: string;
    message: string;
    avatar: string;
  };
}

export function ClosedMessagesList ({onClick, active, data}: MessageListProps) {

 
    return(
      <>
        <div 
        className={`${styles.container} ${styles[active?'active' : '']}`}
        onClick={onClick}           >
          <>
             <div className={styles.picture}><img src="https://github.com/WillianSavoia.png" alt="Avatar" className={styles.avatar} /></div>
             <div className={styles.separator}>
               <div className={styles.separatorOne}>
                  <div className={styles.name}>{data.name} </div>
                  <div className={styles.checked}><AiOutlineCheckCircle  size={20} /></div>
               </div>
               <div className={styles.separatorOne}>
                 <div className={styles.lastMsg}><p>{data.message}</p></div>
               </div>
             </div>
          </>
        </div>
      </>
    )
}

