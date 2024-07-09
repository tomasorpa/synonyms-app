import { useState } from "react";

export const useSynonyms = () => {
  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccesful, setIsSuccesful] = useState(null);
  const getSynonyms = async (word) => {
    try {
      const response = await fetch(
        `https://api.datamuse.com/words?rel_syn=${word}`
      );
      const data = await response.json();
      setSynonyms(data);
      setWord(word);
      setIsSuccesful(true);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsSuccesful(false);
    }
  };
  const handleOnChange = ({ target }) => {
    setWord(target.value);
    setIsSuccesful(null);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    getSynonyms(word);
  };

  return { synonyms, isLoading, isSuccesful, handleOnChange, handleOnSubmit,getSynonyms,word };
};
