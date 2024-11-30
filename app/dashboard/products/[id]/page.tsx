import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import ProductCard from "../_components/ProductCard"
import { Product, Provider } from "@/entities"
import UpdateProduct from "./_components/UpdateProduct"
import DeleteProduct from "./_components/DeleteProduct"

export default async function ProductPage({ params }: { params: { id: string } }) {
    const response = await fetch(`${API_URL}/products/${params.id}`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: [`dashboard:products:${params.id}`]
        }
    })
    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders()
        }
    })
    const product: Product = await response.json()
    const providers: Provider[] = await responseProviders.json()
    return (
        <div className="w-full">
            <div className="max-w-[4/12] m-10">
            <ProductCard product={product} />
            </div>
            <UpdateProduct product={product} providers={providers} />
            <div className="pl-10">
            <DeleteProduct productId={product.productId} />
            </div>
        </div>
    )
}