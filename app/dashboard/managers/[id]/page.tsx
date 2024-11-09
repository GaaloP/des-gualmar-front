import { API_URL } from "@/constants"
import { Manager } from "@/entities"
import { authHeaders } from "@/helpers/authHeaders"
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import ManagerCard from "./_components/managerCard"
import DeleteManagerButton from "../_components/deleteManagerButton"

export default async function ManagerPage({ params }: { params: { id: string } }) {
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
        <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
            <ManagerCard data={data} />
            <div className="bg-gray-100 rounded-md px-10 py-2">
                <DeleteManagerButton managerId={data.managrId} />
            </div>
        </div>
    )
}