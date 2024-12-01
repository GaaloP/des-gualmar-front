'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function createEmployee(formData: FormData) {
    let employee: any = {}
    for (const key of formData.keys()) {
        employee[key] = formData.get(key)
    }
    const response = await fetch(`${API_URL}/employees`, {
        body: JSON.stringify(employee),
        headers: {
            ...authHeaders(),
            'content-type': "application/json"
        },
        method: "POST"
    })
    if (response.status == 201) {
        revalidateTag("dashboard:employees")
    }
    
    console.log(await response.json())
}