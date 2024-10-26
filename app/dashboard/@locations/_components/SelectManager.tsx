'use client';

import { Location, Manager } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

interface SelectManagerProps {
    managers: Manager[],
    locations: Location[],
    defaultManager?: string
}

export default function SelectManager({ 
    managers, 
    locations,
    defaultManager
 }: SelectManagerProps) {
    const disabledKeys = locations.map((location: Location) => {
        if (location.manager?.managrId != defaultManager) return location.manager?.managrId
    }).filter((managerId)=> managerId != undefined)
    return (
        <Select defaultSelectedKeys={defaultManager != undefined ? [defaultManager] : []} label="Gerente" name="manager" disabledKeys={disabledKeys}>
            {
                managers.map((manager: Manager) => {
                    return (
                        <SelectItem key={manager.managrId}>
                            {manager.managerName}
                        </SelectItem>
                    )
                })
            }
        </Select>
    )
}