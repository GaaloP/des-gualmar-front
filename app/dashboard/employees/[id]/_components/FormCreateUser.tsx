'use client'

import registerEmployee from "@/actions/users/registerEmployee";
import { Employee } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import { generate } from "generate-password";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

export default function FormCreateUserEmployee({ employee }: { employee: Employee }) {
    const [password, setPassword] = useState<string>()
    const [visible, setVisible] = useState<boolean>(false)
    const { employeeId } = employee
    const registerEmployeeById = registerEmployee.bind(null, employeeId)
    return (
        <form action={registerEmployeeById} className="py-10 flex flex-col gap-2">
            <h1 className="text-center font-bold text-xl">Crear usuario</h1>
            <Input name="userEmail" label="Email" />
            <Input
                value={password}
                type={visible ? "text" : "password"}
                name="userPassword"
                label="Contraseña"
                endContent={
                    <button
                        type="button"
                        onMouseDown={() => setVisible(true)}
                        onMouseUp={() => setVisible(false)}
                    >
                        <LuEye size={30} />
                    </button>
                }
            />
            <Button color="primary" onPress={() => {
                setPassword(generate({
                    length: 10
                }))
            }}>
                Sugerir
            </Button>
            <Button type="submit">
                Añadir usuario
            </Button>
        </form>
    )
}