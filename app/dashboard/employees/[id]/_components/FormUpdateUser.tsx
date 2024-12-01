'use client'

import updateUser from "@/actions/users/update";
import { User } from "@/entities";
import { Button, Input } from "@nextui-org/react";
import { generate } from "generate-password";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

export default function FormUpdateUser({user}: {user: User}){
    const { userId } = user
    const [password, setPassword] = useState<string>()
    const [visible, setVisible] = useState<boolean>(false)
    const updateUserById = updateUser.bind(null, userId)
    return (
        <form action={updateUserById} className="py-10 flex flex-col gap-2">
            <h1 className="text-center font-bold text-xl">Actualizar usuario</h1>
            <Input 
                defaultValue={user.userEmail}
                name="userEmail" 
                label="Email"
            />
            <Input
                defaultValue=""
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
                Actulizar usuario
            </Button>
        </form>
    )
}