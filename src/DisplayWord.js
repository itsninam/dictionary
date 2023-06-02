const DisplayWord = ({ data }) => {
  const { word, phonetic, meanings } = data;
  return (
    <div>
      <p>{word}</p>
      <p>{phonetic}</p>
    </div>
  );
};

export default DisplayWord;
