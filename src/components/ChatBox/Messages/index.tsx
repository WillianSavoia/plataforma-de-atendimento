import { ThemeContext } from '../../../context/ThemeContext';
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


export function Messages ({data, user}: MessageProps) {

    const {theme} = useContext(ThemeContext);
    return(
        <div className={styles.chatBox}
        >
              <div className={`${styles.chatBox1} ${styles[theme]}`}
             style={{
              marginLeft: user.id === data.author ? ' auto' : '0',
             }}
              >
                <p>{data.message}</p>
              </div>
             </div>
    )
}