import React from "react";

const Dashboard = ()=>{
    return(
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rouded shadow">Card 1</div>
                <div className="bg-white p-6 rouded shadow">Card 2</div>
                <div className="bg-white p-6 rouded shadow">Card 3</div>
            </div>
        </div>
    )
}
export default Dashboard;