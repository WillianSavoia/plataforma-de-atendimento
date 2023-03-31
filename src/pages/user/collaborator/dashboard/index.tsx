import { useContext } from 'react'
import { CollaboratorDashboard } from '../../../../components/CollaboratorComponents/CollaboratorDashboard'
import { CollaboratorHeader } from '../../../../components/CollaboratorComponents/CollaboratorHeader'
import { CollaboratorSideBar } from '../../../../components/CollaboratorComponents/SideBar'
import { ThemeContext } from '../../../../context/ThemeContext'
import styles from './styles.module.scss'
import Head from 'next/head'

export default function DashboardCollaborator(){

    const {theme} = useContext(ThemeContext);

    return(
        <>

            <Head>
                <title>Atendente |Dashboard</title>
            </Head>
            <div className={`${styles.container} ${styles[theme]}`}>
                <CollaboratorSideBar />
                <CollaboratorHeader />
                <CollaboratorDashboard />

                
            </div>
        </>
    )
}