import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar(){
    return (
        <nav className="w-[10vw] h-[90vh] bg-blue-100 flex flex-col items-center py-10 justify-center gap-10">
            
            <NavItem icon= {<LuStore className="text-5xl"/>} path="/dashboard"/>
            <NavItem icon= {<LuWheat className="text-5xl"/>} path="/dashboard/products"/>
            <NavItem icon= {<LuTruck className="text-5xl"/>} path="/dashboard/providers"/>
            <NavItem icon= {<LuUser className="text-5xl"/>} path="/dashboard/managers"/>
            <NavItem icon= {<LuUsers className="text-5xl"/>} path="/dashboard/employees"/>
            
        </nav>
    )
}