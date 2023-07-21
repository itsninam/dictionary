import { useEffect } from "react";
import { Link } from "react-router-dom";

const SavedWords = ({
  savedWords,
  setSavedWords,
  userInput,
  setUserInput,
  fetchData,
}) => {
  const handleRemoveWord = (id) => {
    const selectedWordToRemove = savedWords.filter((word) => word.id !== id);
    setSavedWords(selectedWordToRemove);
  };

  useEffect(() => {
    fetchData();
  }, [userInput]);

  return (
    <>
      {savedWords.length > 0 ? (
        <>
          {savedWords.map((word) => {
            return (
              <div key={word.id} className="saved-word-container">
                <Link to="/">
                  <p onClick={() => setUserInput(word.word)}>{word.word}</p>
                </Link>
                <button onClick={() => handleRemoveWord(word.id)}>
                  remove
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <p>No items in list</p>
      )}
    </>
  );
};

export default SavedWords;
