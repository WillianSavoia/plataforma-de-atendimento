import styles from './styles.module.scss';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import { useState } from 'react';
import { GetStaticProps } from 'next';

type Post = {
    title: string;
    content: string;
}

interface CarrouselProps {
    Content: Post[] | null
}

export function Carrousel (){
        return (
        <>
        <div className={styles.carrousel}>
        <div className={styles.moveArrows}>
            <div className={styles.left}>
            <AiOutlineLeftCircle size={30}/>
            </div>
            <div className={styles.right}>
            <AiOutlineRightCircle size={30} />
            </div>
        </div>
        <div className={styles.content}>
        <h1>Plataforma de atendimento</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
        
        </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () =>{
    const carrouselContent =[
        {Title: "Plataforma de atendimento",
        Content:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {Title: "Missão",
        Content:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {Title: "Objetivos",
        Content:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        }
    ]

    const content = carrouselContent.map(post =>{
        return{
        title: post.Title,
        content: post.Content
        }
    })
    return {
        props: {
            content
        }
    }
}

//Terminar o Carrossel