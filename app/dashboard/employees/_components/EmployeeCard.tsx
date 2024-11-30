import { Employee } from "@/entities";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default function EmployeeCard({ employee }: { employee: Employee }) {
    return (
        <Card className="size-72 max-h-72 min-h-72 bg-blue-200" isFooterBlurred>
            <CardHeader>
                <h1 className="font-bold text-xl">{employee.employeeName + " " + employee.employeeLastName}</h1>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Email: <b>{employee.employeeEmail}</b></p>
                <p>Teléfono: <b>{employee.employeePhoneNumber}</b></p>
                <p>Tienda:
                    <Link href={{
                        pathname: "/dashboard",
                        query: {
                            store: String(employee.location?.locationId)
                        }
                        }}>
                        <b> {employee.location?.locationName}</b>
                        
                    </Link>
                </p>
            </CardBody>
            <CardFooter className="absolute bottom-0 py-2 h-14">
                <Link href={`/dashboard/employees/${employee.employeeId}`}>
                    <Button variant="ghost">Actualizar datos</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}