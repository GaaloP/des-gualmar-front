import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import axios from "axios"
import SelectLoction from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/authHeaders";
const LocationPage = async ({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    let { data } = await axios.get<Location[]>(
        `${API_URL}/locations`,
        {
            headers: {
               ...authHeaders()
            }
        }
    )
    data = [
        {
            locationId: 0,
            locationName: "Saleciona una tienda",
            locationLatLng: [0, 0],
            locationAddres: ""
        },
        ...data
    ]  
    return (
        <div className="w-8/12">
            <div className="w-full flex flex-col items-center h-[90vh] bg-yellow-50">
                <div className="w-1/2 my-10">
                    <SelectLoction locations={data} store={searchParams?.store} />
                </div>
                <div className="w-8/12">
                    <LocationCard store={searchParams.store}/>
                </div>
                <div className="w-6/12">
                    <FormNewLocation searchParams={searchParams}/>
                </div>
                <DeleteLocationButton store={searchParams.store}/>
            </div>
        </div>
    )
}
export default LocationPage