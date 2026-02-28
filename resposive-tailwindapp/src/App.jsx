import React from "react";
import "./App.css";
function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">MyBrand</h1>
          {/* Desktop View */}
          <ul className="hidden md:flex gap-6">
            <li className="hover:text-gray-200 cursor-pointer">Home</li>
            <li className="hover:text-gray-200 cursor-pointer">About</li>
            <li className="hover:text-gray-200 cursor-pointer">Services</li>
            <li className="hover:text-gray-200 cursor-pointer">Contacts</li>
          </ul>
          {/* Mobile Button */}
          <button className="md:hidden bg-white text-blue-600 px-3 py-1 rounded">
              Menu
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  This is our Responsive UI
                </h2>
                <p className="text-gray-600 mb-6">
                  Tailwind CSS makes a responsive design simple and fast to build......
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800 tansition duration-300">
                  Join Now
                </button>
            </div>
            {/* Image */}
            <div className="flex-1">
                <img 
                src="https://tailwindcss.com/_next/static/media/card.f65e2d09.jpg" alt="" 
                className="w-full rounded-lg shadow-lg"
                />
            </div>
        </div>
      </section>
      {/* features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h3 className="text-2xl md:text-4xl font-bold">
            Our Features
          </h3>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3">Fast Development</h4>
              <p className="text-gray-600">Build application quickly using utility-fist CSS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3">Responsive Design</h4>
              <p className="text-gray-600">It works perfectly on mobile, tablet and desktop devices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-3">Customizable</h4>
              <p className="text-gray-600">Fully customizable using tailwind.config.js</p>
            </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 my-10">
              <p>@2026 CCA.All Rights Reserved</p>
            </footer>
    </div>
  );
}

export default App;