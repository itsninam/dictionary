import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import SearchWord from "./Components/SearchWord";
import Loading from "./Components/Loading";
import DisplayWord from "./Components/DisplayWord";
import Header from "./Components/Header";
import SavedWords from "./Components/SavedWords";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState("keyboard");
  const [loading, setLoading] = useState(true);
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;

  //get item from local storage
  const [savedWords, setSavedWords] = useState(() => {
    const saved = localStorage.getItem("savedWords");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  //fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //display data on page load
  useEffect(() => {
    fetchData();

    //set item in local storage
    localStorage.setItem("savedWords", JSON.stringify(savedWords));
  }, [savedWords]);

  //fetch data on user enter keypress
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchData();
    }
  };

  return (
    <div className="wrapper">
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <Header savedWords={savedWords} />
          <SearchWord
            userInput={userInput}
            setUserInput={setUserInput}
            handleKeyPress={handleKeyPress}
          />
          <DisplayWord
            data={data}
            savedWords={savedWords}
            setSavedWords={setSavedWords}
          /> */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header savedWords={savedWords} />
                  <SearchWord
                    userInput={userInput}
                    setUserInput={setUserInput}
                    handleKeyPress={handleKeyPress}
                  />
                  <DisplayWord
                    data={data}
                    savedWords={savedWords}
                    setSavedWords={setSavedWords}
                  />
                </>
              }
            />
            <Route
              path="/savedWords"
              element={
                <SavedWords
                  savedWords={savedWords}
                  setSavedWords={setSavedWords}
                />
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
