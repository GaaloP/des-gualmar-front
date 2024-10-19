import { TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import axios from "axios"
import { cookies } from "next/headers";
import SelectLoction from "./_components/SelectLocation";
const CountPage = async () => {
    const userCookies = cookies()
    const token = userCookies.get(TOKEN_NAME)?.value
    const { data } = await axios.get<Location[]>(
        "http://127.0.0.1:4000/locations",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return (
        <div className="w-2/12">
            <SelectLoction locations={data}/>
        </div>
    )
}
export default CountPage