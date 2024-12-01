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
                    <Link href={{pathname: `/dashboard/managers/${data.manager?.managrId}`}}>
                        <b className="underline"> {data.manager?.managerName}</b>
                    </Link>
                </p>
                <p className="w-full">
                    Dirección:<b> {data.locationAddres}</b>
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4569.178214754168!2d-100.43324441279447!3d20.676678276566566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35ac75ec22e47%3A0xe2c0d892850c0522!2sWalmart%20Juriquilla!5e0!3m2!1ses-419!2smx!4v1733012146196!5m2!1ses-419!2smx" width="300" height="200"   loading="lazy"></iframe>
            </CardBody>
        </Card>
    )
}