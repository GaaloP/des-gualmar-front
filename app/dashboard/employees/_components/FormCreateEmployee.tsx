import createEmployee from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import SelectLocation from "./SelectLocation";

export default async function FormCreateEmployee() {
    const response = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        },
    })
    const locations = await response.json()
    return (
        <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-blue-400 h-fit">
            <Input isRequired name="employeeName" label="Nombre"/>
            <Input isRequired name="employeeLastName" label="Apellido"/>
            <Input isRequired name="employeeEmail" label="Email" />
            <Input isRequired name="employeePhoneNumber" label="Teléfono"/>
            <SelectLocation stores={locations} />
            <Button type="submit" color="primary">
                Añadir empleado
            </Button>
        </form>
    )
}