'use server'

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders"

export default async function DeleteLocation(formData: FormData){
    const locationId = formData.get("deleteValue")
    if (!locationId) return
    fetch(`${API_URL}/locations/${locationId}`,  {
        headers: {
            ...authHeaders()
        },
        method: "DELETE"
    });
}
 