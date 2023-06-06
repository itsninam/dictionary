const SavedWords = ({ savedWords }) => {
  return (
    <>
      {savedWords.length > 0 && (
        <p>
          {savedWords.map((word) => {
            return <p>{word.word}</p>;
          })}
        </p>
      )}
    </>
  );
};

export default SavedWords;
