import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import SearchWord from "./SearchWord";
import Loading from "./Loading";
import DisplayWord from "./DisplayWord";

const App = () => {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState("keyboard");
  const [loading, setLoading] = useState(true);
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;

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
  }, []);

  //fetch data on user enter keypress
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <SearchWord
            userInput={userInput}
            setUserInput={setUserInput}
            handleKeyPress={handleKeyPress}
          />
          <DisplayWord data={data} />
        </>
      )}
    </div>
  );
};

export default App;
