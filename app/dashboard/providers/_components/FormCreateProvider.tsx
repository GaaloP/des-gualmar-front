import createProvider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateProvider(){
    return(
        <form action={createProvider} className="flex flex-col gap-2 flex-grow-0">
            <h1 className="text-2xl text-white">Crear Proveedor</h1>
            <Input label="Nombre" name="providerName"/>
            <Input label="Email" name="providerEmail"/>
            <Input label="Teléfono" name="providerPhoneNumber"/>
            <Button color="primary" type="submit">Crear Proveedor</Button>
        </form>
    )
}