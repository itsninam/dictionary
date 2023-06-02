import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/cat";
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const { word, phonetic, meanings } = data;

  return (
    <div className="App">
      <p>{word}</p>
      <p>{phonetic}</p>
    </div>
  );
};

export default App;
