import React from 'react';

const Navbar =({toggleSidebar})=>{
    return(
        <nav className='bg-white shadow-md px-4 py-3 flex items-center justify-between z-50'>
            <button
                onClick={toggleSidebar}
                className='text-gray-800 text-2xl'
            >
                <div className="flex flex-col gap-1">
                    <span className="block w-6 h-0.5 bg-gray-800"></span>
                    <span className="block w-6 h-0.5 bg-gray-800"></span>
                    <span className="block w-6 h-0.5 bg-gray-800"></span>
                </div>
            </button>
            <h2 className='text-xl font-semibold'>Dashboard</h2>

            <div className='flex items-center gap-4'>
                <span className='font-medium'>XYZ</span>
                <img className='rounded-full w-10 h-10' src="data:image/jpeg;base64,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" alt="" />
            </div>
        </nav>
    )
}

export default Navbar;