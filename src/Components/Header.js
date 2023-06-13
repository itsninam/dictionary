import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ savedWords }) => {
  const [selectedFont, setSelectedFont] = useState("sans-serif-font");
  const fontChoices = ["sans-serif-font", "serif-font", "mono-font"];

  const changeFont = (element) => {
    element.classList.remove(...fontChoices);
    element.classList.add(selectedFont);
  };

  useEffect(() => {
    const bodyFont = document.querySelector("body");
    const inputFont = document.querySelector("input");
    changeFont(bodyFont);
    changeFont(inputFont);
  }, [selectedFont]);

  return (
    <header>
      <div className="dictionary-container">
        <Link to="/savedWords">
          <FontAwesomeIcon icon={faBook} className="dictionary-icon" />
          {savedWords.length > 0 && <span>{savedWords.length}</span>}
        </Link>
      </div>
      <div className="right-items-container">
        <form action="">
          <label htmlFor="fontSelect" className="sr-only">
            Please select a font
          </label>
          <select
            name="fontSelect"
            id="fontSelect"
            value={selectedFont}
            onChange={(event) => setSelectedFont(event.target.value)}
          >
            <option value="sans-serif-font">Sans Serif</option>
            <option value="serif-font">Serif</option>
            <option value="mono-font">Mono</option>
          </select>
        </form>
        <button>toggle</button>
        <FontAwesomeIcon icon={faMoon} className="icon" />
      </div>
    </header>
  );
};

export default Header;
