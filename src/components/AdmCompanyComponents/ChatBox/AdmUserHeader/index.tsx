import { useState, useContext } from 'react'
import { BiSun, BiMoon} from 'react-icons/bi'

import { BsPaperclip } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { ThemeContext } from '../../../../context/ThemeContext'
import { CheckedConfirmationModal } from '../../AdmCompanyModals/CheckedConfirmationModal'

import { InsertDocumentModal } from '../../AdmCompanyModals/InsertDocumentModal'
import { InsertImageModal } from '../../AdmCompanyModals/InsertImageModal'
import { UserInfoModal } from '../../AdmCompanyModals/userInfoModal'
import { SwitchInput } from '../../../SwitchMode'
import styles from './styles.module.scss'


export function AdmUserHeader () {

    const [openMenu, setOpenMenu] = useState(false);

    const {theme} = useContext(ThemeContext)

    return (
        <>

                
                <div className={`${styles.userHeader} ${styles[theme]}`}>
                <UserInfoModal />
                <div>
                        <div className={styles.switch}><BiSun className={styles.svgSwitch} size={25}/>
                            <SwitchInput />
                            <BiMoon size={25} className={styles.svgSwitch}
                            />
                        </div>
                            <div className={styles.btns}>
                                <div className={styles.svg}
                                onClick={() => setOpenMenu(true)}
                                >
                                    <BsPaperclip size={30}/>
                                </div>
                                
                                <div className={styles.checkedBtn}>
                                    <CheckedConfirmationModal />
                            </div>
                    </div>
                </div>
                
                </div>
                <div className={styles.attachment}
                style={{display: openMenu === false ? 'none' : 'block'}}>
                    <div className={styles.menuHeader}>
                        <h2>Anexar:</h2>
                        <GrClose size={15} 
                        className={styles.svg}
                        onClick={() => setOpenMenu(false)}
                        />
                    </div>
                <div className={styles.icons}>
                    <InsertImageModal />
                    <InsertDocumentModal />
                </div>
            </div>
        </>
    )
}
