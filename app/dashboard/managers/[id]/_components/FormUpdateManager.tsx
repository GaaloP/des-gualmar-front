import updateManager from "@/actions/managers/update";
import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@nextui-org/react";
import SelectStore from "./SelectStore";

export default async function FormUpdateManager({ manager }: { manager: Manager }) {
    const updateManagerId = updateManager.bind(null, manager.managrId)
    const response = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        }
    })
    const stores = await response.json()
    return (
        <form action={updateManagerId} className="bg-blue-400 rounded-md flex flex-col flex-grow-0 gap-2">
            <h1>Actualizar Gerente</h1>
            <Input defaultValue={manager.managerName} name="managerName" label="Nombre" required/>
            <Input defaultValue={manager.managerEmail} name="managerEmail" label="Email" required/>
            <Input defaultValue={String(manager.managerSalary)} name="managerSalary" label="Salario" required/>
            <Input defaultValue={manager.managerPhoneNumber} name="managerPhoneNumber" label="Teléfono" required />
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId}/>
            <Button color="primary" type="submit">Update</Button>
        </form>
    )
}