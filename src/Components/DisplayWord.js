const DisplayWord = ({ data, savedWords, setSavedWords }) => {
  const { word, phonetic, meanings } = data;

  const handleSaveWord = () => {
    //if word is already present in the array, alert the user
    //otherwise add it to the array
    if (savedWords.find((word) => word.word === data.word)) {
      console.log("already added!");
    } else {
      setSavedWords([...savedWords, data]);
    }
  };

  return (
    <div>
      <p>{word}</p>
      <p>{phonetic}</p>
      <button onClick={handleSaveWord}>Add to list</button>
    </div>
  );
};

export default DisplayWord;
