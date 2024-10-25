'use client';
import { API_URL } from "@/constants";
import { Button, Input, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()
    const handleSubmit = async (e: any) => {
        setSubmitting(true)
        e.preventDefault()
        const formData = new FormData(e.target)
        let authData: any = {}
        authData.userEmail = formData.get("userEmail")
        authData.userPassword = formData.get("userPassword")
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                body: JSON.stringify(authData),
                credentials: 'include',
                method: "POST"
            })
            if (response.status == 201) router.push('/dashboard')
            setSubmitting(false)
        } catch (e) {
            setSubmitting(false)
        }
        return;
    }
    return (
        <form className="bg-blue-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2xl my-4 text-white">Iniciar sesión</p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm" />
            </div>
            <div>
                <Button 
                    color="default" 
                    variant="faded" 
                    type="submit" 
                    disabled={submitting}>
                    {submitting ? <Spinner size="md" /> : "Iniciar Sesión"}
                </Button>
                <p>¿Aún no tienes una cuenta? <Link href="/signup" className="text-red-700 underline">Registrate aquí</Link></p>
            </div>
        </form>
    )
}