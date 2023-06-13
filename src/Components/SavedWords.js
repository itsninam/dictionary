const SavedWords = ({ savedWords, setSavedWords }) => {
  const handleRemoveWord = (id) => {
    const selectedWordToRemove = savedWords.filter((word) => word.id !== id);
    setSavedWords(selectedWordToRemove);
  };

  return (
    <>
      {savedWords.length > 0 ? (
        <>
          {savedWords.map((word) => {
            return (
              <div key={word.id} className="saved-word-container">
                <p>{word.word}</p>
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
