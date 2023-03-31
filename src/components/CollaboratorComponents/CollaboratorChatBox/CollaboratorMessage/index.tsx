import { ThemeContext } from '../../../../context/ThemeContext';
import { useContext } from 'react';
import styles from './styles.module.scss'


interface MessageProps {
    data: {
      chatId: number;
      name: string;
      author: number;
      message: string;
    };
    user: {
      id: number;
      name: string;
    };
}


export function CollaboratorMessages ({data, user}: MessageProps) {

 

    const {theme} = useContext(ThemeContext);
    return(

      
   
        <div className={`${styles.chatBox1} ${styles[theme]}`}
          style={{
            marginLeft: user.id === data.author ? ' auto' : '0',
            background: user.id === data.author ? 'var(--green-whatsapp)' : '',
            color: user.id === data.author ? 'var(--black)' : '',
          }}
        >
          <p>{data.message}</p>
        </div>


   
      
    
    )
}