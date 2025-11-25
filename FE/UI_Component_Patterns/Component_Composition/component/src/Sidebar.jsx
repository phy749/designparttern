import { useState } from "react";

export const Sidebar = () => {
  const menu = [
    {
      label: "Dashboard",
      children: [],
    },
    {
      label: "Users",
      children: [
        { label: "All Users" },
        { label: "Active Users" },
        { label: "Banned Users" },
      ],
    },
    {
      label: "Settings",
      children: [{ label: "General" }, { label: "Security" }],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className="space-y-2 text-gray-700">
      {menu.map((item, index) => (
        <li key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full text-left hover:bg-gray-200 rounded p-2 cursor-pointer font-semibold flex justify-between items-center"
          >
            {item.label}
            {item.children.length > 0 && (
              <span>{openIndex === index ? "▲" : "▼"}</span>
            )}
          </button>

          {item.children && item.children.length > 0 && openIndex === index && (
            <ul className="ml-4 mt-1 space-y-1 text-gray-600">
              {item.children.map((child, cIndex) => (
                <li
                  key={cIndex}
                  className="hover:bg-gray-100 rounded p-2 cursor-pointer"
                >
                  {child.label}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
