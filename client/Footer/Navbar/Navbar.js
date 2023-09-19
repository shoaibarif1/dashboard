import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">Dashboard</h1>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:underline">Home</a>
          <a href="#" className="text-white hover:underline">About</a>
          <a href="#" className="text-white hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
