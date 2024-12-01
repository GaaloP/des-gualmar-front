import { API_URL } from "@/constants"
import { Manager } from "@/entities"
import { authHeaders } from "@/helpers/authHeaders"
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import ManagerCard from "./_components/ManagerCard"
import DeleteManagerButton from "./_components/DeleteManagerButton"
import UpdateManager from "./_components/UpdateManager"
import FormUpdateManager from "./_components/FormUpdateManager"

export default async function ManagerPage({ params }: { params: { id: string } }) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers: {
            ...authHeaders()
        },
        method: "GET",
        next: {
            tags: [`dashboard:managers:${params.id}`, "dashboard:managers"]
        }
    })
    const data: Manager = await response.json()

    return (
        <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
            <ManagerCard data={data} />
            <div className="bg-white rounded-md px-10 py-2 flex flex-row flex-grow-0 gap-2">
                <UpdateManager>
                    <FormUpdateManager manager={data}/>
                </UpdateManager>
                <DeleteManagerButton managerId={data.managrId} />
            </div>
        </div>
    )
}