import { Link } from "react-router-dom";
import { useState } from "react";

const SavedWord = ({ word, handleRemoveWord, setUserInput }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <label htmlFor="checkbox" id="checkbox" className="sr-only"></label>
      <input
        type="checkbox"
        value={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)}
      />
      <li className={isChecked ? "strikeout" : ""}>
        <Link to="/">
          <span onClick={() => setUserInput(word.word)}>{word.word}</span>
        </Link>

        <button onClick={() => handleRemoveWord(word.id)}>remove</button>
      </li>
    </>
  );
};

export default SavedWord;
