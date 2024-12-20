import updateEmployee from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import SelectLocation from "../../_components/SelectLocation";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async function FormUpdateEmployee({ employee }: { employee: Employee }) {
    const response = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
    })
    const locations = await response.json()
    const { employeeId } = employee
    const updateEmployeeById = updateEmployee.bind(null, employeeId)
    return (
        <form action={updateEmployeeById} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-blue-400 h-fit">
            <Input name="employeeName" label="Nombre" defaultValue={employee.employeeName} />
            <Input name="employeeLastName" label="Apellido" defaultValue={employee.employeeLastName} />
            <Input name="employeeEmail" label="Email" defaultValue={employee.employeeEmail} />
            <Input name="employeePhoneNumber" label="Teléfono" defaultValue={employee.employeePhoneNumber} />
            <SelectLocation stores={locations} defaultStore={employee.location?.locationId}/>
            <Button type="submit" color="primary">
                Actualizar datos
            </Button>
        </form>
    )
}