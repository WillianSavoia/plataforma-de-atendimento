import { AdmCompanyMenuOptions } from "../../../../components/CompaniesMenu/admCompanyMenu";
import { AdmCompanySideBar } from "../../../../components/SideBar/admCompanysb";

export default function Dashboard(){
    return(
        <>
        <AdmCompanySideBar />
        <AdmCompanyMenuOptions />
        </>
    )
}