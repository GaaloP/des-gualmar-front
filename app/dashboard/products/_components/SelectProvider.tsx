'use client'

import { Provider } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

export default function SelectProvider({ providers, defProvider }:
    { providers: Provider[], defProvider?: string }) {
    return (
        <Select name="provider" label="Provedor" defaultSelectedKeys={defProvider ? [defProvider] : undefined}>
            {providers.map((provider) => {
                return (
                    <SelectItem key={provider.providerId}>
                        {provider.providerName}
                    </SelectItem>
                )
            })}
        </Select>
    )
}