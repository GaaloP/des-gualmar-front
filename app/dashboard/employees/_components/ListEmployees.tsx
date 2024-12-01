'use client'

import { Employee, Location } from "@/entities";
import EmployeeCard from "./EmployeeCard";;
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

export default function ListEmployees({ employees, locations }: { employees: Employee[], locations: Location[] }) {
    const [filter, setFilter] = useState<String>()
    return (
        <div className="flex flex-col">
            {locations && (
                <Select
                    onChange={(e) => {
                        setFilter(e.target.value)
                    }}
                    className="w-60 pb-5"
                    defaultSelectedKeys={[]}
                    label="Tienda"
                >
                    {locations.map((location) => {
                        return (
                            <SelectItem key={location.locationId}>
                                {location.locationName}
                            </SelectItem>
                        )
                    })}
                </Select>
            )}
            <div className="flex flex-wrap gap-4">
                {employees
                    .filter((employee: Employee) => {
                        if (filter== "") return true
                        return String(employee.location?.locationId) == filter}
                    )
                    .map((employee: Employee) => {
                        return <EmployeeCard key={employee.employeeId} employee={employee} />
                    })}
            </div>
        </div>
    )
}