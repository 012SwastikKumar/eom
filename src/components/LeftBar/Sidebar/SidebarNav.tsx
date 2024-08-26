import { useState } from "react";
import {
  FiHome,
  FiGlobe,
  FiBookmark,
  FiShoppingCart,
  FiUser,
  FiClock,
} from "react-icons/fi";
import "./SidebarNav.css";

const SidebarNav = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: <FiHome className="w-5 h-5" /> },
    { name: "Explore", icon: <FiGlobe className="w-5 h-5" /> },
    { name: "Saved", icon: <FiBookmark className="w-5 h-5" /> },
    { name: "Cart", icon: <FiShoppingCart className="w-5 h-5" /> },
    { name: "Profile", icon: <FiUser className="w-5 h-5" /> },
    { name: "Purchase History", icon: <FiClock className="w-5 h-5" /> },
  ];

  return (
    <div className="">
      <ul className="space-y-7">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center space-x-4 text-gray-700 hover:text-teal-500 cursor-pointer px-6
              ${activeItem === item.name ? "border-l-4 rounded border-teal-700" : ""}`}
            onClick={() => setActiveItem(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;

// import { FiHome, FiGlobe, FiBookmark, FiShoppingCart, FiUser, FiClock } from 'react-icons/fi';
// const SidebarNav = () => {
//   return (
//     <div className="w-64 bg-gray-100 p-4">
//       <ul className="space-y-4">
//         <li className="flex items-center space-x-4 text-gray-700 hover:text-teal-700 cursor-pointer">
//           <FiHome className="w-5 h-5" />
//           <span>Home</span>
//         </li>
//         <li className="flex items-center space-x-4 text-gray-700 hover:text-teal-700 cursor-pointer">
//           <FiGlobe className="w-5 h-5" />
//           <span>Explore</span>
//         </li>
//         <li className="flex items-center space-x-4 text-gray-700 hover:text-teal-700 cursor-pointer">
//           <FiBookmark className="w-5 h-5" />
//           <span>Saved</span>
//         </li>
//         <li className="flex items-center space-x-4 text-gray-700 hover:text-teal-700 cursor-pointer">
//           <FiShoppingCart className="w-5 h-5" />
//           <span>Cart</span>
//         </li>
//         <li className="flex items-center space-x-4 text-gray-700 hover:text-teal-700 cursor-pointer">
//           <FiUser className="w-5 h-5" />
//           <span>Profile</span>
//         </li>
//         <li className="flex items-center space-x-4 text-gray-700 hover:text-teal-700 cursor-pointer">
//           <FiClock className="w-5 h-5" />
//           <span>Purchase History</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SidebarNav;
