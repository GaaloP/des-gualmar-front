import Image from "next/image";

export default function Header(){
    return (
        <div className="w-screen h-[10vh] bg-blue-900 flex flex-row items-center px-10">
            <Image src="Walmart_logo.svg" width={100} height={0} alt="GualmaR Logo" draggable={false}></Image>
        </div>
    )
}