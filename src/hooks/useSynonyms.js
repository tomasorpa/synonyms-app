import { useState } from "react";

export const useSynonyms = () => {
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const getSynonyms = async (word) => {
    const response = await fetch(
      `https://api.datamuse.com/words?rel_syn=${word}`
    );
    const data = await response.json();
    setWord(word);
    setSynonyms(data);
  };
    const handleOnChange = ({ target }) => {
        const { value } = target;
        setWord(value);
        setIsLoading(true)
    };
    const handleOnSubmit = (event) => {
        if(word.trim().length==0)return
        event.preventDefault();
        try {
            getSynonyms(word);
            setIsLoading(false)
            setIsSuccessful(true)
        } catch (error) {
            setIsSuccessful(false)
        }
  };

  return { handleOnChange, handleOnSubmit, word, synonyms,getSynonyms,isLoading,isSuccessful};
};
