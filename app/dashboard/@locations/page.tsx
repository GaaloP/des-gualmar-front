import { TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import axios from "axios"
import { cookies } from "next/headers";
import SelectLoction from "./_components/SelectLocation";
const LocationPage = async () => {
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
        <div className="w-8/12">
            <div className="w-full flex flex-col items-center h-[90vh] bg-yellow-50">
                <div className="w-1/2 my-10">
                    <SelectLoction locations={data}/>
                </div>
            </div>
        </div>
    )
}
export default LocationPage