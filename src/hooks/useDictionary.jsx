import { useEffect, useState } from "react";

export const useDictionary = ({ text }) => {
  const [data, setData] = useState([]);
  const [meanings, setMeanings] = useState([]);
  const [phonetics, setPhonetics] = useState([]);
  const [word, setWord] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!text) {
      return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setMeanings(data[0].meanings);
        setPhonetics(data[0].phonetics);
        setWord(data[0].word);
        setError("");
      })
      .catch((err) => setError(err));
  }, [text]);

  return { meanings, phonetics, word, error, data };
};
