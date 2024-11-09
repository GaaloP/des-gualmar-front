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
        <form action={updateManagerId} className="bg-blue-400 rounded-md">
            <h1>Actualizar Gerente</h1>
            <Input defaultValue={manager.managerName} name="managerName" />
            <Input defaultValue={manager.managerEmail} name="managerEmail" />
            <Input defaultValue={String(manager.managerSalary)} name="managerSalary" />
            <Input defaultValue={manager.managerPhoneNumber} name="managerPhoneNumber" />
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId} />
            <Button color="primary" type="submit">Update</Button>
        </form>
    )
}