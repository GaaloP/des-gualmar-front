'use server'
import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"

export default async function registerEmployee(employeeId: string, formData: FormData){
    let data: any = {}
    data.userEmail = formData.get("userEmail")
    data.userPassword = formData.get("userPassword")
    data.userRoles = "Employee"

    const response = await fetch(`${API_URL}/auth/register/${employeeId}?role=employee`, {
        body: JSON.stringify(data),
        headers: {
            ...authHeaders(),
            'content-type': "application/json" 
        },
        method: "POST"
    })
}