import { AdmCompanyHeader } from "../../../components/AdmCompanyHeader"
import { AdmCompanySideBar } from "../../../components/SideBar/admCompanysb"
import { ThemeContext } from "../../../context/ThemeContext"

import {useContext} from 'react'

import styles from './styles.module.scss'

export default function AdmCompanyPage() {

    const {theme}  = useContext(ThemeContext)

    return(
        <>
        <div className={`${styles.container} ${styles[theme]}`}>
        <AdmCompanySideBar />
        <AdmCompanyHeader />
        </div>
        </>
    )
}