import { useSynonyms } from "./hooks/useSynonyms";

function SynonymApp() {
  const {
    handleOnChange,
    handleOnSubmit,
    word,
    synonyms,
    getSynonyms,
    isLoading,
    isSuccessful,
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
      {(synonyms.length == 0 && isSuccessful && !isLoading) && (
        <p>
          No synonyms found for <b>{word}</b>
        </p>
      )}
    </>
  );
}

export default SynonymApp;
