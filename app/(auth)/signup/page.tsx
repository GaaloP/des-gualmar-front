import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function SignupPage(){
    return (
        <div className="bg-blue-500 px-10 py-2 rounded-md">
            <p className="text-2xl my-4 text-white">Registrarse</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" type="email" isRequired={true} size="sm"/>
                <Input label="Contraseña" type="password" isRequired={true} size="sm"/>
                <Input label="Repite contraseña" type="password" isRequired={true} size="sm"/>
            </div>
            <div>
                <Button color="default" variant="faded">Registrarse</Button>
                <p>¿Ya tienes una cuenta? <Link href="/login" className="text-red-700 underline">Inicia Sesión</Link></p>
            </div>
        </div>
    )
}