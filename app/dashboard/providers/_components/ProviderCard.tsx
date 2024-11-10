import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ({provider}: {provider: Provider}){
    return (
        <Card>
            <CardHeader>{provider.providerName}</CardHeader>
            <Divider/>
            <CardBody>
                <p>Email: <b>{provider.providerEmail}</b></p>
                <p>Teléfono: <b>{provider.providerPhoneNumber}</b></p>
                {
                    provider.products ? (
                        <p>Tiene: {provider.products.length} productos</p>
                    ) : <p>No tiene productos</p>
                }
            </CardBody>
        </Card>
    )
}