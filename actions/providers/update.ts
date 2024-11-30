'use server';

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function updateProvider(providerId: string, formData: FormData) {
    console.log(formData)
    let provider: any = {}
    for (const key of formData.keys()) {
        provider[key] = formData.get(key)
    }
    const response = await fetch(`${API_URL}/providers/${providerId}`, {
        body: JSON.stringify(provider),
        headers: {
            ...authHeaders(),
            'content-type': "application/json"
        },
        method: "PATCH"
    })
    console.log(response.status)
    if (response.status == 200) {
        revalidateTag("dashboard:providers")
    }
}