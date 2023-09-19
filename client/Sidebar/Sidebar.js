import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 w-64 p-4">
      <div className="text-white text-xl font-semibold mb-4">Menu</div>
      <ul className="space-y-2">
        <li><a href="#" className="text-white hover:underline">Dashboard</a></li>
        <li><a href="#" className="text-white hover:underline">Analytics</a></li>
        <li><a href="#" className="text-white hover:underline">Reports</a></li>
        <li><a href="#" className="text-white hover:underline">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
