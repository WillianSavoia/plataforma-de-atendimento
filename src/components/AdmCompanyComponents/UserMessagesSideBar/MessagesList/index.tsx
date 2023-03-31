/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

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

export function MessagesList ({onClick, active, data}: MessageListProps) {

 
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
                  <div className={styles.date}>19:00</div>
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

