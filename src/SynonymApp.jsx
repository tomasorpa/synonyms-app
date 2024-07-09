import { useSynonyms } from "./hooks/useSynonyms";
function SynonymApp() {
  const {
    synonyms,
    isLoading,
    isSuccesful,
    handleOnChange,
    handleOnSubmit,
    getSynonyms,
    word,
  } = useSynonyms();
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <h1>Synonyms App</h1>
        <input
          type="text"
          placeholder="Search a word"
          onChange={handleOnChange}
          value={word}
        />
        <button>Search</button>
      </form>
      <ul>
        {synonyms.map((syn, index) => (
          <li key={index} onClick={() => getSynonyms(syn.word)}>
            {syn.word}
          </li>
        ))}
      </ul>
      {isLoading && <p>Is loading</p>}
      {isSuccesful && synonyms.length < 1 && (
        <p>
          No matches found for <b>{word}</b>
        </p>
      )}
    </>
  );
}

export default SynonymApp;
