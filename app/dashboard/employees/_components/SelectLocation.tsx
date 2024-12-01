'use client'
import { Location } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

export default function SelectLocation({ stores, defaultStore }: { stores: Location[], defaultStore?: number }) {
    return (
        <Select label="Tienda" name="location" defaultSelectedKeys={defaultStore ? [String(defaultStore)] : undefined}>
            {
                stores.map((store: Location) => (
                    <SelectItem key={String(store.locationId)}>
                        {store.locationName}
                    </SelectItem>
                ))
            }
        </Select>
    )
}