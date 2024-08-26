import SidebarNav from "./Sidebar/SidebarNav";
import { FiShoppingCart } from "react-icons/fi";
import "./LeftBar.css";
import ContactCard from "./ContactCard/ContactCard";

const LeftBar = () => {
  return (
    <div className="LeftBar-Container">
      <div className="LeftBar-Header">
        <div className="IconContainer">
          <FiShoppingCart color="white" className="w-6 h-6" />
        </div>
        <p className="LeftBar__BrandName">ShopMart</p>
      </div>
      <SidebarNav />
      <ContactCard />
    </div>
  );
};

export default LeftBar;
