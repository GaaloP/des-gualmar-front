import createProduct from "@/actions/products/create"
import { API_URL } from "@/constants"
import { Provider } from "@/entities"
import { authHeaders } from "@/helpers/authHeaders"
import { Button, Input } from "@nextui-org/react"
import { LuDollarSign } from "react-icons/lu"
import SelectProvider from "./_components/SelectProvider"

const ProductsPage = async () => {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders()
        }
    })
    const providers = await response.json()
    return (
        <form action={createProduct} className="px-20 justify-center pt-10">
            <div className="flex flex-col bg-blue-500 p-10 rounded-md gap-5">
            <h1 className="text-2xl font-bold text-center">Crear producto</h1>
            <Input label="Nombre" name="productName" />
            <Input label="Precio" name="price" endContent={<LuDollarSign size="20"/>} />
            <Input label="No. Sellos" name="countSeal" />
            <SelectProvider providers={providers}/>
            <Button color="success" type="submit">
                Crear producto
            </Button>
            </div>
        </form>
    )
}
export default ProductsPage