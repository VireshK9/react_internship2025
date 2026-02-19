import React from "react";

const Sidebar = ({isOpen})=>{
    return(
        <div 
            className = {`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-5
            transform tansition-transform duration-300 z-40
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 md:static md:block
            `}
        >
            <h1 className="text-2xl font-bold mb-8">My App</h1>

            <ul className="space-y-4">
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Analystics</li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Users</li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
            </ul>
        </div>
    )
}

export default Sidebar;