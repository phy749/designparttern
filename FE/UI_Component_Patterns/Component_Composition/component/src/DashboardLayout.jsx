import React from "react";

const DashboardLayout = ({ children }) => {
  return <div className="flex h-screen bg-gray-100">{children}</div>;
};

DashboardLayout.Sidebar = function Sidebar({ children }) {
  return <div className="w-64 bg-white shadow-md p-4">{children}</div>;
};

DashboardLayout.Header = function Header({ children }) {
  return (
    <div className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      {children}
    </div>
  );
};

DashboardLayout.Content = function Content({ children }) {
  return <div className="flex-1 p-6 overflow-y-auto">{children}</div>;
};

export default DashboardLayout;
