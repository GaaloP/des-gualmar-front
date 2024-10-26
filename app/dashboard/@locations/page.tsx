import { API_URL } from "@/constants";
import { Location } from "@/entities";
import SelectLoction from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/authHeaders";
import FormUpdateLocation from "./_components/FormUpdateLocation";
import UpdateLocation from "./_components/updateLocation";

const LocationPage = async ({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const response = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
        method: "GET",
        next: {
            tags: ["dashboard:locations"]
        }
    })
    let data: Location[] = await response.json()
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
                <div className="flex flex-row flex-grow-0 gap-10 items-center">
                    <UpdateLocation store={searchParams.store}>
                        <FormUpdateLocation store={searchParams.store}/>
                    </UpdateLocation>
                    <DeleteLocationButton store={searchParams.store}/>
                </div>
            </div>
        </div>
    )
}
export default LocationPage