import "./ContactCard.css";
import { FiPlus } from "react-icons/fi";

const ContactCard = () => {
  return (
    <div className="ContactCard-Wrapper">
      <div className="ContactCard-Container">
        <div className="ContactCard__TopIconContainer">
          <FiPlus style={{ strokeWidth: 4 }} color="#fff" className="w-6 h-6" />
        </div>
        <p className="ContactCard__Heading">Need Help</p>
        <p className="ContactCard__Body">
          Ablout Account Management Ordering and Payment Refund & FAQ{" "}
        </p>
        <button className="ContactCard__CTA">Customer Services</button>
      </div>
    </div>
  );
};

export default ContactCard;
