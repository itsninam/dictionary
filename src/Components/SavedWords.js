import { useEffect, useState } from "react";

import SavedWord from "./SavedWord";

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
        <ul>
          {savedWords.map((word) => {
            return (
              <SavedWord
                word={word}
                setUserInput={setUserInput}
                handleRemoveWord={handleRemoveWord}
                key={word.id}
              />
            );
          })}
        </ul>
      ) : (
        <p>No items in list</p>
      )}
    </>
  );
};

export default SavedWords;
