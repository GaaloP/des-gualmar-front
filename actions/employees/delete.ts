'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteEmployee(employeeId: string, formData: FormData) {
    const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        headers: {
            ...authHeaders()
        },
        method: "DELETE"
    })
    if (response.status == 200) {
        revalidateTag("dashboard:employees")
        redirect('/dashboard/employees')
    }
}