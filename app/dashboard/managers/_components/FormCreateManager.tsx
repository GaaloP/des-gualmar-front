import { Location } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import SelectStore from "../[id]/_components/SelectStore";
import createManager from "@/actions/managers/create";

export default function FormCreateManager({stores}: {stores: Location[]}){
    
    return (
        <form action={createManager} className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold ">Crear gerente</h1>
            <Input isRequired name="managerName" label="Nombre"/>
            <Input isRequired name="managerSalary" label="Salario"/>
            <Input isRequired name="managerEmail" label="Email"/>
            <Input isRequired name="managerPhoneNumber" label="Teléfono"/>
            <SelectStore stores={stores} />
            <Button color="primary" type="submit">Añadir gerente</Button>
        </form>
    )
}