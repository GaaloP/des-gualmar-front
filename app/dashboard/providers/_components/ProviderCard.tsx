import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard ({provider}: {provider: Provider}){
    return (
        <Card className="w-full max-w-[350px]">
            <CardHeader><b>{provider.providerName}</b></CardHeader>
            <Divider/>
            <CardBody>
                <p>Email: <b>{provider.providerEmail}</b></p>
                <p>Teléfono: <b>{provider.providerPhoneNumber}</b></p>
                {
                    provider?.products?.length != 0 ? (
                        <p>Tiene: {provider?.products?.length} producto{provider.products.length > 1 ? "s" : ""}</p>
                    ) : <p>No tiene productos</p>
                }
            </CardBody>
        </Card>
    )
}