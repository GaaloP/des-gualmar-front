import { Manager } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default function ManagerCard({data}: {data: Manager}){
    return(
        <Card className="mx-20 py-2 text-center">
            <CardHeader>
                <p className="w-full text-2xl">Nombre: <b>{data.managerName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody className="flex flex-row flex-grow-0 items-center gap-10 justify-center">
                <div className="flex flex-col text-lg">
                <p className="w-full">Email: <b>{data.managerEmail}</b></p>
                <p className="w-full">Teléfono: <b>{data.managerPhoneNumber}</b></p>
                <p className={data.location ? "": "hidden"}>
                    Tienda: 
                    <Link href={{
                        pathname: `/dashboard`,
                        query: {store: data?.location?.locationId}
                    }}>
                        <b className="underline">{data?.location?.locationName}</b>
                    </Link>
                </p>
                </div>
                {data.location ? (
                <>
                    <iframe 
                        className="border-2 border-blue-800 rounded-md"
                        src={`https://www.google.com.mx/maps/@20.3908239,-99.9576856,15z?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D`}
                        width="300" 
                        height="200">
                    </iframe>
                </>
                ) : (
                    <p className="w-full text-3xl">No hay tienda</p>
                )}
            </CardBody>
        </Card>
    )
}