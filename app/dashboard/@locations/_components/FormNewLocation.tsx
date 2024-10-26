import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";

export default async function FormNewLocation({
    searchParams
}: {
    searchParams: {[key: string]: string | string[] | undefined}
}) {
    if (searchParams.store) return null
    const responseManagers = await fetch(`${API_URL}/managers`, {
        headers: {
            ...authHeaders()
        },
        method: "GET",
        next: {
            tags: ["dashboard:managers", "dashboard:locations:managers"]
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
    return (
        <form action={createLocation} className="bg-blue-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-2xl text-white text-center">Crear tienda</h1>
            <Input required={true} label="Nombre" name="locationName" />
            <Input required={true} label="Dirección" name="locationAddres" />
            <Input required={true} label="Latitud" name="locationLat" />
            <Input required={true} label="Latitud" name="locationLng" />
            <SelectManager  managers={dataManagers} locations={dataLocations}/>
            <Button type="submit" color="primary">Subir</Button>
        </form>
    )
}