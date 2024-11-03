import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";

export default async function CountManagersPage(){
    const response = await fetch(`${API_URL}/managers`,{
        headers: {
            ...authHeaders
        },
        next: {
            tags: ["dashboard:managers"]
        }
    })
    const manager: Manager[] = await response.json()
    const countNoStore = manager.filter((manager: Manager)=> !manager.location)
    let max: number
    return(
        <div className="font-blod">
            <h1>Hay {manager.length} manager{manager.length > 1 ? "s" : ""}</h1>
            <h1>Hay {countNoStore.length} manager{countNoStore.length > 1 ? "s" : ""} sin tienda</h1>
        </div>
    )
}