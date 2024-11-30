'use client'

import { Product, Provider } from "@/entities";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";

export default function FilteredCards({ products, providers }: { products: Product[], providers: Provider[] }) {
    const [filter, setFilter] = useState<string>("")
    const [provider, setProvider] = useState<string>("")
    const [productsL, setProductsL] = useState<Product[]>(products)
    const [show, setShow] = useState(false)
    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            if (product.productName.toLowerCase().includes(filter.toLowerCase()) 
                && product.provider.providerId == provider ) {
                return true
            } else return false
        })
        setProductsL(filteredProducts)
        setShow(true)
    }, [filter, provider, products])
    return (
        <div className="bg-yellow-200 overflow-y-auto max-h-[90vh] min-h-[90vh] flex flex-col gap-8 border-r-yellow-500 border-r-2 px-10 pt-10 pb-5">
            <Input 
                onChange={(e) => {
                    setFilter(e.target.value)
                }}
                label="Nombre del Producto"
            />
            <Select
                label="Proveedor"
                onChange={(e) => {
                    setProvider(e.target.value)
                }}
            >
                {providers.map((provider) => (<SelectItem key={provider.providerId}>
                    {provider.providerName}
                </SelectItem>))}
            </Select>
            {show && productsL.map((product) => {
                return (
                    <Link
                    className="hover:scale-110 transition-transform"
                        key={product.productId}
                        href={{ pathname: `/dashboard/products/${product.productId}` }}
                    >
                        <ProductCard product={product} />
                    </Link>
                )
            })}
        </div>
    )
}