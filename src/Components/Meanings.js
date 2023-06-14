const Meanings = ({ meanings }) => {
  return (
    <section className="meanings-container">
      {meanings.map((meaning) => {
        return (
          <>
            <p className="noun">{meaning.partOfSpeech}</p>
            {meaning.definitions.map((definition) => {
              return (
                <ul>
                  <li>
                    <span className="definition">{definition.definition}</span>
                    <span className="example">{definition.example}</span>
                  </li>
                </ul>
              );
            })}
          </>
        );
      })}
    </section>
  );
};

export default Meanings;
