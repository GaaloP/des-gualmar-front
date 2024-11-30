import deleteProvider from "@/actions/providers/delete"
import { Button } from "@nextui-org/react"

export default function DeleteProviderButton({providerId}: {providerId: string}){
    const deleteProviderById = deleteProvider.bind(null, providerId)
    return(
        <form action={deleteProviderById}>
            <Button className="w-full" color="danger" type="submit">Borrar</Button>
        </form>
    )
}