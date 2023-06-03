import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon={faBook} className="dictionary-icon" />
      <div className="right-items-container">
        <form action="">
          <label htmlFor="fontSelect" className="sr-only">
            Please select a font
          </label>
          <select name="fontSelect" id="fontSelect">
            <option value="sans-serif">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="mono">Mono</option>
          </select>
        </form>
        <button>toggle</button>
        <FontAwesomeIcon icon={faMoon} className="icon" />
      </div>
    </header>
  );
};

export default Header;
