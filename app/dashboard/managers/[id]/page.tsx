import { API_URL } from "@/constants"
import { Manager } from "@/entities"
import { authHeaders } from "@/helpers/authHeaders"
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"

export default async function ManagerPage({params}: {params: {id: string}}){
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: [`dashboard:managers:${params.id}`, "dashboard:managers"]
        }
    })
    const data: Manager = await response.json()
    return (
        <Card className="mx-20 py-2 bg-yellow-50">
            <CardHeader>
                <p className="w-full">Nombre: <b>{data.managerName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className="w-full">Email: <b>{data.managerEmail}</b></p>
                <p className="w-full">Teléfono: <b>{data.managerPhoneNumber}</b></p>
                {data.location ? (
                <>
                    <p>Tienda: <b>{data.location.locationName}</b></p>
                    <iframe 
                        className="border-2 border-blue-800 rounded-md"
                        src={`https://www.google.com.mx/maps/@20.3908239,-99.9576856,15z?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D`}
                        width="300" 
                        height="200">
                    </iframe>
                </>
                ) : (
                    <p>No hay tienda</p>
                )}
            </CardBody>
        </Card>
    )
}