import EmployeesLocation from "./@locations/_components/EmployeesLocation";

export default function DashboardPage({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <>
            <div className="h-full w-4/12">
                <div className="h-[90vh] pverflow-hidden overflow-y-auto first:mt-0 last:mb-0">
                    {
                        searchParams.store ?(
                            <EmployeesLocation store={searchParams?.store} />
                        ) : <div className="w-full text-2xl px-2 text-center mt-10">
                                Sin tienda seleccionada
                            </div>
                    }
                </div>
            </div>
        </>
    )
}