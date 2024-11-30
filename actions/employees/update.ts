'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function updateEmployee(employeeId: string, formData: FormData) {
    let employee: any = {}
    for (const key of formData.keys()) {
        employee[key] = formData.get(key)
    }
    const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        body: JSON.stringify(employee),
        headers: {
            ...authHeaders(),
            'content-type': "application/json"
        },
        method: "PATCH"
    })
    if (response.status == 200) {
        revalidateTag("dashboard:employees")
    }
}