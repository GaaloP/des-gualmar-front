'use client';
import { API_URL } from "@/constants";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";

export default function LoginPage(){
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        let authData: any = {}
        authData.userEmail = formData.get("userEmail")
        authData.userPassword = formData.get("userPassword")
        const { data } = await axios.post(`${API_URL}/auth/login`, {
            ...authData
        }, {
            withCredentials: true
        })
        console.log(data)
        return;
    }
    return (
        <form className="bg-blue-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2xl my-4 text-white">Iniciar sesión</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm"/>
                <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm"/>
            </div>
            <div>
                <Button color="default" variant="faded" type="submit">Iniciar Sesión</Button>
                <p>¿Aún no tienes una cuenta? <Link href="/signup" className="text-red-700 underline">Registrate aquí</Link></p>
            </div>
        </form>
    )
}