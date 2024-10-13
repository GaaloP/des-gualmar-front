import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function LoginPage(){
    return (
        <div className="bg-green-200 px-10 py-2 rounded-md">
            <p className="text-2xl my-4 text-white">Iniciar sesión</p>
            <div className="flax flex-col gap-2 my-4 items-center">
                <Input label="Email" type="email" isRequired={true} size="sm"/>
                <Input label="Contraseña" type="password" isRequired={true} size="sm"/>
            </div>
            <div>
                <Button color="primary">Registrarse</Button>
                <p>¿Aún no tienes una cuenta? <Link href="/signup" className="text-blue-500 underline">Registrate aquí</Link></p>
            </div>
        </div>
    )
}