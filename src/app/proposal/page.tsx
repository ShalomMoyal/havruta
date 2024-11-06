import { ProposalForm } from "../_components/ProposalForm/ProposalForm";
import ProposalList from "../_components/AllPropsal/AllPropsal";
import { WebAppNavbarComponent } from "../_components/navBar/NavBar";

export default async function ProposalPage(){

    return(
        <> 
         <WebAppNavbarComponent />
         <ProposalForm />
         <ProposalList />
        </>
    )
}