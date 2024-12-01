'use server'
import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"

export default async function updateUser(userId: string, formData: FormData){
    let data: any = {}
    data.userEmail = formData.get("userEmail") ? formData.get("userEmail") : undefined
    data.userPassword = formData.get("userPassword") ? formData.get("userPassword") : undefined

    const response = await fetch(`${API_URL}/auth/${userId}`, {
        body: JSON.stringify(data),
        headers: {
            ...authHeaders(),
            'content-type': "application/json" 
        },
        method: "PATCH"
    })
    console.log(await response.json())
}