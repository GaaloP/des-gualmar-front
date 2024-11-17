import { API_URL } from "@/constants"
import { Provider } from "@/entities"
import { authHeaders } from "@/helpers/authHeaders"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import { LuPlus } from "react-icons/lu"
import ProviderCard from "./_components/ProviderCard"
import CreateProvider from "./_components/CreateProvider"
import FormCreateProvider from "./_components/FormCreateProvider"

const ProvidersPage = async () => {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:providers"]
        }
    })
    const providers: Provider[] = await response.json()

    return (
        <div className="flex flex-col flex-grow-0 items-end w-full px-10 pt-10 h-[90vh]">
            <CreateProvider>
                <FormCreateProvider/>
            </CreateProvider>
            <div className="flex flex-wrap w-full py-20 flex-grow-0 gap-14">
                {providers.map((provider: Provider) => (
                    <Link key={provider.providerId} className="hover:scale-110 transition-transform" href={{ pathname: `/dashboard/providers/${provider.providerId}` }}>
                        <ProviderCard provider={provider} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default ProvidersPage