const SearchWord = ({ userInput, setUserInput, handleKeyPress }) => {
  return (
    <p>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </p>
  );
};

export default SearchWord;
