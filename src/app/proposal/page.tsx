import { ProposalForm } from "../_components/ProposalForm/ProposalForm";
import AllProposals from "../_components/AllPropsal/AllPropsal";
import { WebAppNavbarComponent } from "../_components/navBar/NavBar";
export default function ProposalPage(){
    return(
        <> 
         <WebAppNavbarComponent />
         <ProposalForm />
         <AllProposals />
        </>
    )
}