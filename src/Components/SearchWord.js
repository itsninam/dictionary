import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchWord = ({ userInput, setUserInput, handleKeyPress }) => {
  return (
    <form action="">
      <label htmlFor="searchWord" className="sr-only">
        Please enter a word
      </label>
      <input
        id="searchWord"
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
    </form>
  );
};

export default SearchWord;
