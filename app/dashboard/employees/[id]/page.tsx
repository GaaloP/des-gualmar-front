import { API_URL } from "@/constants"
import { Employee } from "@/entities"
import { authHeaders } from "@/helpers/authHeaders"
import { div } from "framer-motion/client"
import EmployeeCard from "../_components/EmployeeCard"
import FormUpdateEmployee from "./_components/FormUpdateEmployee"
import DeleteEmployee from "./_components/DeleteEmployee"
import CreateUser from "./_components/CreateUser"
import FormCreateUserEmployee from "./_components/FormCreateUser"
import { LuUser } from "react-icons/lu"

export default async function EmployeePage({ params }: { params: { id: string } }) {
    const response = await fetch(`${API_URL}/employees/${params.id}`, {
        headers: {
            ...authHeaders()
        }
    })
    const employee: Employee = await response.json()
    return (
        <div className="w-full h-[90vh] flex flex-row items-center justify-center">
            <div className="flex flex-row gap-2 p-4 m-2 h-fit items-center">
                <div className="flex flex-col py-2 items-center">
                    <EmployeeCard employee={employee} />
                    <div className="w-full gap-2 flex py-2 flex-row items-center justify-center">
                    <DeleteEmployee employeeId={employee.employeeId} />
                    {!employee.user && (
                        <CreateUser >
                            <FormCreateUserEmployee employee={employee} />
                        </CreateUser>
                    )}
                    </div>
                </div>
            </div>
            <FormUpdateEmployee employee={employee} />
        </div>
    )
}