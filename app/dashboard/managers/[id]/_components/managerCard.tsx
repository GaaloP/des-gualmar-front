import { Manager } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Link from "next/link";

export default function ManagerCard({ data }: { data: Manager }) {
    return (
        <Card className="mx-20 py-2 text-center">
            <CardHeader>
                <p className="w-full text-2xl">Gerente: <b>{data.managerName}</b></p>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-row flex-grow-0 items-center gap-10 justify-center">
                <div className="flex flex-col text-lg">
                    <p className="w-full">Email: <b>{data.managerEmail}</b></p>
                    <p className="w-full">Teléfono: <b>{data.managerPhoneNumber}</b></p>
                    <p className="w-full">Salario: <b>{data.managerSalary}</b></p>
                    <p className={data.location ? "" : "hidden"}>
                        Tienda:&nbsp;
                        <Link href={{
                            pathname: `/dashboard`,
                            query: { store: data?.location?.locationId }
                        }}>
                            <b className="underline">{data?.location?.locationName}</b>
                        </Link>
                    </p>
                </div>
                {data.location ? (
                    <>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4569.178214754168!2d-100.43324441279447!3d20.676678276566566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35ac75ec22e47%3A0xe2c0d892850c0522!2sWalmart%20Juriquilla!5e0!3m2!1ses-419!2smx!4v1733012146196!5m2!1ses-419!2smx" width="300" height="200"   loading="lazy"></iframe>
            
                    </>
                ) : (
                    <p className="w-full text-3xl">No hay tienda</p>
                )}
            </CardBody>
        </Card>
    )
}