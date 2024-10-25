import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";

export default async function FormNewLocation({
    searchParams
}: {
    searchParams: {[key: string]: string | string[] | undefined}
}) {
    if (searchParams.store) return null
    const token = cookies().get(TOKEN_NAME)?.value
    const responseManagers = await axios.get(`${API_URL}/managers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseLocations = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <form action={createLocation} className="bg-blue-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-2xl text-white text-center">Crear tienda</h1>
            <Input label="Nombre" name="locationName" />
            <Input label="Dirección" name="locationAddres" />
            <Input label="Latitud" name="locationLat" />
            <Input label="Latitud" name="locationLng" />
            <SelectManager  managers={responseManagers.data} locations={responseLocations.data}/>
            <Button type="submit" color="primary">Subir</Button>
        </form>
    )
}