import { API_URL } from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default async function LocationCard({ store }: {
    store: string | string[] | undefined
}) {
    if (!store) return null
    const response = await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders()
        },
        method: "GET",
        next: {
            tags: ["dashboard:locations", `dashboard:locations:${store}`]
        }
    })
    const data: Location = await response.json()
    return (
        <Card>
            <CardHeader>
                <p className="w-full text-2xl">Tienda: <b>{data.locationName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col w-full items-center">
                <p className="w-full">
                    Gerente: 
                    <Link href={{pathname: `/dashboard/managers`}}>
                        <b> {data.manager?.managerName}</b>
                    </Link>
                </p>
                <p className="w-full">
                    Dirección:<b> {data.locationAddres}</b>
                </p>
                <iframe 
                    className="border-2 border-blue-800 rounded-md"
                    src={`https://www.google.com.mx/maps/@20.3908239,-99.9576856,15z?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D`}
                    width="300" 
                    height="200">
                </iframe>
            </CardBody>
        </Card>
    )
}