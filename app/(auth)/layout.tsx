export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
    <div className="bg-green-500 w-screen h-screen overflow-hidden grid">
        <div className="place-content-center place-self-center">
        {children}

        </div>
    </div>
    )
}