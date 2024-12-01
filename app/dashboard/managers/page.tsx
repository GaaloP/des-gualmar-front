import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import ModalCompo from "../_components/ModalCompo"
import FormCreateManager from "./_components/FormCreateManager"
import { LuPlus } from "react-icons/lu"
import { Location } from "@/entities"

const ManagersPage = async() => {
    const response = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        }
    })
    const stores: Location[] = await response.json()
    return (
        <ModalCompo icon={ <LuPlus size={20}/> }>
            <FormCreateManager stores={stores}/> 
        </ModalCompo>
    )
}
export default ManagersPage