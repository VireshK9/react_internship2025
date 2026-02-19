import React ,{useState} from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({children})=>{
    const [isOpen,setIsOpen] = useState(false);

    const toggleSidebar = ()=> setIsOpen(!isOpen);

    return(
        <div className="flex h-screen bg-gray-100">
            <Sidebar isOpen={isOpen}/>

            <div className="flex-1 flex flex-col">
                <Navbar toggleSidebar={toggleSidebar}/>

                <main className="p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )

}

export default Layout;