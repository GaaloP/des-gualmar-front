import { TOKEN_NAME } from "@/constants";
import axios from "axios"
import { cookies } from "next/headers";
const CountPage = async () => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME)?.value
    const countLocatios = await axios.get("http://localhost:4000/locations",{
        headers: {
            Authorization: `Dearer ${token}`
        }
    })
    const cantidad =countLocatios?.data?.length
    return "Cantidad de tiendas:  " + cantidad;
}
export default CountPage