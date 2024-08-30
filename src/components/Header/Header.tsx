import { Input } from "../../components/ui/input";
import { IoMdMic } from "react-icons/io";
import { IoMdMicOff } from "react-icons/io";
import SearchIcon from "@mui/icons-material/Search";
import ProfileImage from "../../assets/profile_img.png";
import "./Header.css";
import { useEffect } from "react";
import useSpeechToText from "../../hooks/useSpeechToText/useSpeechToText";

interface HeaderProps {
  textInput: string;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (input: string) => void;
}

const Header: React.FC<HeaderProps> = ({ textInput, setTextInput, onSearch }) => {
  const { isListening, transcript, startListening, stopListening } = useSpeechToText();

  useEffect(() => {
    if (!isListening && transcript) {
      setTextInput((prev) => prev + " " + transcript);
    }
  }, [isListening, transcript, setTextInput]);

  const stopVoiceInput = () => {
    stopListening();
  };

  const startStopListening = () => {
    isListening ? stopVoiceInput() : startListening();
  };

  const SearchButtonClickHandler = () => {
    console.log(`Sent From Header: ${textInput}`);
    onSearch(textInput); // Call the onSearch prop with textInput
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      SearchButtonClickHandler();
    }
  };

  return (
    <div className="Header">
      <p>
        <span className="Header_BrandTag_Regular">
          You Visualize, We’ll Find
        </span>
      </p>
      <div className="SearchBox">
        <Input
          disabled={isListening}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="InputBox"
          placeholder="Search Your Products Here"
        />
        <button onClick={SearchButtonClickHandler} className="SearchIconContainer">
          <SearchIcon />
        </button>
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














// import { Input } from "../../components/ui/input";
// import { IoMdMic } from "react-icons/io";
// import { IoMdMicOff } from "react-icons/io";
// import SearchIcon from "@mui/icons-material/Search";
// import ProfileImage from "../../assets/profile_img.png";
// import "./Header.css";
// import { useEffect } from "react";
// import useSpeechToText from "../../hooks/useSpeechToText/useSpeechToText";

// interface HeaderProps {
//   textInput: string;
//   setTextInput: React.Dispatch<React.SetStateAction<string>>;
//   onSearch: (input: string) => void;
// }


// const Header : React.FC<HeaderProps>= ({ textInput, setTextInput, onSearch }) => {
//   // const [textInput, setTextInput] = useState("");
//   const { isListening, transcript, startListening, stopListening } =
//     useSpeechToText();
//   useEffect(() => {
//     if (!isListening && transcript) {
//       setTextInput((prev) => prev + " " + transcript);
//     }
//   }, [isListening, transcript]);

//   const stopVoiceInput = () => {
//     stopListening();
//   };

//   const startStopListening = () => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//     isListening ? stopVoiceInput() : startListening();
//   };

//   const SearchButtonClickHandler = () => {
//     console.log(`Sent From Header: ${textInput}`);
//     onSearch(textInput); // Call the onSearch prop with textInput
//   }

//   return (
//     <div className="Header">
//       <p>
//         {/* <span className="Header_BrandTag_Bold">Fashion</span>
//         <br /> */}
//         <span className="Header_BrandTag_Regular">
//           You Visualize, We’ll Find
//         </span>
//       </p>
//       <div className="SearchBox">
//         <Input
//           disabled={isListening}
//           value={textInput}
//           onChange={(e) => setTextInput(e.target.value)}
//           className="InputBox"
//           placeholder="Search Your Products Here"
//         />
//         <button onClick={SearchButtonClickHandler} className="SearchIconContainer">
//           <SearchIcon />
//         </button>
//         <button onClick={startStopListening} className="MicIconContainer">
//           {isListening ? <IoMdMicOff /> : <IoMdMic />}
//         </button>
//       </div>
//       <div className="Profile">
//         <img className="Profile_Image" src={ProfileImage} alt="profile" />
//         <p>Rekha</p>
//       </div>
//     </div>
//   );
// };
// export default Header;
