import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import DeleteProvider from "./DeleteProvider";
import DeleteProviderButton from "./DeleteButton";


export default function FormUpdateProvider({ provider }: { provider: Provider }) {
    const { providerId } = provider
    const updateProviderWithId = updateProvider.bind(null, providerId)
    return (
        <>
        <h1 className="text-xl">Editar Proveedor</h1>
        <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-yellow-100 rounded-md px-10 py-10 mr-20 items-center justify-center">
                <Input className="max-w-[250px]" defaultValue={provider.providerName} label="Nombre" name="providerName" />
                <Input className="max-w-[250px]" defaultValue={provider.providerEmail} label="Email" name="providerEmail" />
                <Input className="max-w-[250px]" defaultValue={provider.providerPhoneNumber} label="Teléfono" name="providerPhoneNumber" />
            <Button color="primary" type="submit">Actualizar Proveedor</Button>
            <DeleteProvider>
                <h1 className="text-3xl text-center">¿Estás segro que deseas borrar a {provider.providerName}?</h1>
                <DeleteProviderButton providerId={providerId}/>
            </DeleteProvider>
        </form>
        </>
    )
}