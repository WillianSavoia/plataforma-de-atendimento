/* eslint-disable @next/next/no-img-element */
import { ThemeContext } from '../../../context/ThemeContext';
import { Messages } from './Messages';

import { FormEvent, useContext, useState } from 'react';
import styles from './styles.module.scss';

import {IoPaperPlaneOutline} from 'react-icons/io5'
import {GrEmoji} from 'react-icons/gr'
import {BsFillMicFill} from 'react-icons/bs'
import { useSpeechRecognition } from 'react-speech-recognition';
import {  AiOutlineClose } from 'react-icons/ai';
import { AdmUserHeader } from './AdmUserHeader';

import EmojiPicker from 'emoji-picker-react';
import { BodyChat } from './bodyChat';
interface ChatBoxProps{
  user: {
    id: number;
    name: string;
  };
}

export function ChatBox({user}: ChatBoxProps) {

  const { browserSupportsSpeechRecognition} = useSpeechRecognition();

  let recognition: any = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

   const handleMicClick = () => {
    if (!browserSupportsSpeechRecognition) {
    return alert('Este navegador não suporta esta funcionalidade, tente com outro navegador!');
    };

    if(recognition !== null){
 
      recognition.onstart = () => {
        setListening(true);
      }

      recognition.onend = () => {
        setListening(false);
      }

      recognition.onresult = (e: any) => {

        setSendMessages( e.results[0][0].transcript);
      }

      recognition.start();


    }
 }

 

  
    const [emojiOpen, setEmojiOpen] = useState(false);

  

    const [sendMessages, setSendMessages] = useState('');

    const [listening, setListening] = useState(false)


    const {theme} = useContext(ThemeContext);

    function HandleSubmit(event: FormEvent) {
       event.preventDefault();
      };  
      return(
        <>
        
        <div className={styles.container}>
           
             
      
           <div className={styles.header}>

              <AdmUserHeader />
           
            </div>
           
           
            <BodyChat 
            user={user}
            />

           
            <div className={styles.emojiArea}
            style={{ height: emojiOpen ? '14rem' : '0' }}
            >

              <EmojiPicker
                searchDisabled
                skinTonesDisabled
                onEmojiClick={(emojiData, ev) => setSendMessages(sendMessages + emojiData.emoji)}
                width={'100%'}
                height={'14rem'} />
            </div>
      
             <div
             onSubmit={HandleSubmit}
             className={`${styles.inputTextArea} ${styles[theme]}`}>
              {emojiOpen === true &&
                <><div className={styles.closeEmoji}
                  onClick={() => setEmojiOpen(false)}><AiOutlineClose size={25} /></div>
                  <div className={styles.emoji} onClick={() => setEmojiOpen(true)}
                  style={{color: emojiOpen ? "var(--cyan-500)" : ""}}
                  ><GrEmoji size={25} />
                  </div>
                  </>
              }
              {emojiOpen === false &&
              <div className={styles.emoji} onClick={() => setEmojiOpen(true)}><GrEmoji size={25}/></div>
              }
              <div className={styles.input}>
                <input type="text" 
                placeholder='Escreva uma mensagem'
                value={sendMessages}
                onChange={(ev) => setSendMessages(ev.target.value)}
                />
              </div>
                {sendMessages === '' &&
                 <div className={styles.button}><button 
                 className={`${styles.sendMessage} ${styles[theme]}`}
                 onClick={handleMicClick}
                 style={{color: listening ? 'var(--cyan-500)' : ''}}
                 >
                   <BsFillMicFill size={25}/></button></div>
               
                
                }
                {sendMessages !== '' &&
                  <div className={styles.button}><button 
                  className={`${styles.sendMessage} ${styles[theme]}`}
                  type='submit'
                  >
                    <IoPaperPlaneOutline size={25}/></button></div>
                 
                  }
             
             </div>
        </div>
        </>
    )
}


