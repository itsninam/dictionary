import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Meanings from "./Meanings";

const DisplayWord = ({ data, savedWords, setSavedWords }) => {
  const { word, phonetic, meanings, phonetics } = data;

  const handleSaveWord = () => {
    //if word is already present in the array, alert the user
    //otherwise add it to the array
    if (savedWords.find((word) => word.word === data.word)) {
      console.log("already added!");
    } else {
      //create an id
      data.id = Math.floor(Math.random() * 100);
      setSavedWords([...savedWords, data]);
    }
  };

  //find the object that contains a audio property
  const audio = phonetics.find((phonetic) => phonetic.audio !== "");

  const handlePressPlay = () => {
    const audioPlayer = document.querySelector("audio");

    audioPlayer?.play();
  };

  return (
    <>
      <section className="word-content">
        <div className="flex-container">
          <div className="word-container">
            <p className="word" onClick={handleSaveWord}>
              {word}
            </p>
            <p className="phonetic">{phonetic}</p>
          </div>
          {audio && (
            <>
              <FontAwesomeIcon
                icon={faCirclePlay}
                onClick={handlePressPlay}
                aria-hidden="true"
                className="play-icon"
              />
              <audio
                controls
                key={Math.floor(Math.random() * 100)}
                className="sr-only"
              >
                <source src={audio.audio} type="audio/mpeg" />
              </audio>
            </>
          )}
        </div>
      </section>
      <Meanings meanings={meanings} />
    </>
  );
};

export default DisplayWord;
