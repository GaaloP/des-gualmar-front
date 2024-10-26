'use server'

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders"
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeleteLocation(formData: FormData){
    const locationId = formData.get("deleteValue")
    if (!locationId) return
    fetch(`${API_URL}/locations/${locationId}`,  {
        headers: {
            ...authHeaders()
        },
        method: "DELETE"
    });
    revalidateTag("dashboard:locations")
    redirect("/dashboard")
}
 