import { Input } from "../../components/ui/input";
import { IoMdMic } from "react-icons/io";
import { IoMdMicOff } from "react-icons/io";
import SearchIcon from "@mui/icons-material/Search";
import ProfileImage from "../../assets/profile_img.png";
import "./Header.css";
import { useEffect, useState } from "react";
import useSpeechToText from "../../hooks/useSpeechToText/useSpeechToText";

const Header = () => {
  const [textInput, setTextInput] = useState("");
  const { isListening, transcript, startListening, stopListening } =
    useSpeechToText();
  useEffect(() => {
    // Update textInput whenever transcript changes and listening stops
    if (!isListening && transcript) {
      setTextInput((prev) => prev + " " + transcript);
    }
  }, [isListening, transcript]);

  const stopVoiceInput = () => {
    stopListening();
  };

  const startStopListening = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isListening ? stopVoiceInput() : startListening();
  };

  return (
    <div className="Header">
      <p>
        {/* <span className="Header_BrandTag_Bold">Fashion</span>
        <br /> */}
        <span className="Header_BrandTag_Regular">
          You Visualize, We’ll Find
        </span>
      </p>
      <div className="SearchBox">
        <Input
          disabled={isListening}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="InputBox"
          placeholder="Search Your Products Here"
        />
        <div className="SearchIconContainer">
          <SearchIcon />
        </div>
        <button onClick={startStopListening} className="MicIconContainer">
          {isListening ? <IoMdMicOff /> : <IoMdMic />}
        </button>
      </div>
      <div className="Profile">
        <img className="Profile_Image" src={ProfileImage} alt="profile" />
        <p>Rekha</p>
      </div>
    </div>
  );
};
export default Header;
