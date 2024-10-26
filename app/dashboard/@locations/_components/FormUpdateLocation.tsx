import { API_URL } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";
import { updateLocation } from "@/actions/locations/update";

export default async function FormUpdateLocation({
    store
}: {
    store: string | string[] | undefined
}) {
    if (!store || store == undefined || typeof store=="object") return null
    const updateWithStoreId = updateLocation.bind(null, store)
    const responseManagers = await fetch(`${API_URL}/managers`, {
        headers: {
            ...authHeaders()
        },
        method: "GET",
        next: {
            tags: ["dashboard:managers"]
        }
    })
    const dataManagers: Manager[] = await responseManagers.json()
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
        method: "GET",
        next: {
            tags: ["dashboard:managers"]
        }
    })
    const dataLocations: Location[] = await responseLocations.json()
    let foundLocation = dataLocations.find((location) => location.locationId == +store)
    let foundManager = dataManagers.find((manager) => manager.managrId == foundLocation?.manager?.managrId)
    return (
        <form action={updateWithStoreId} className="bg-blue-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-2xl text-white text-center">Actualizar tienda</h1>
            <Input required={true} defaultValue={foundLocation?.locationName} label="Nombre" name="locationName" />
            <Input required={true} defaultValue={foundLocation?.locationAddres} label="Dirección" name="locationAddres" />
            <Input required={true} defaultValue={foundLocation?.locationLatLng[0].toString()} label="Latitud" name="locationLat" />
            <Input required={true} defaultValue={foundLocation?.locationLatLng[1].toString()} label="Latitud" name="locationLng" />
            <SelectManager defaultManager={foundManager?.managrId} managers={dataManagers} locations={dataLocations} />
            <Button type="submit" color="primary">Actualizar</Button>
        </form>
    )
}