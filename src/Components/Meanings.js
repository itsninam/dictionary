const Meanings = ({ meanings }) => {
  return (
    <section className="meanings-container">
      {meanings.map((meaning, index) => {
        return (
          <div key={index}>
            <p className="noun">{meaning.partOfSpeech}</p>
            {meaning.definitions.map((definition, index) => {
              return (
                <ul key={index}>
                  <li>
                    <span className="definition">{definition.definition}</span>
                    <span className="example">{definition.example}</span>
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Meanings;
