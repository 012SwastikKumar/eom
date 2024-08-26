import { Input } from "../../components/ui/input";
import SearchIcon from "@mui/icons-material/Search";
import ProfileImage from "../../assets/profile_img.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <p>
        <span className="Header_BrandTag_Bold">Fashion</span>
        <br />
        <span className="Header_BrandTag_Regular">From Industry Leaders</span>
      </p>
      <div className="SearchBox">
        <Input className="InputBox" placeholder="Search Your Products Here" />
        <div className="SearchIconContainer">
          <SearchIcon />
        </div>
      </div>
      <div className="Profile">
        <img className="Profile_Image" src={ProfileImage} alt="profile" />
        <p>Rekha</p>
      </div>
    </div>
  );
};
export default Header;
