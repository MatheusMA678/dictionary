import { useEffect, useState } from "react";

export const useDictionary = ({ word }) => {
  const [dictionary, setDictionary] = useState([]);

  useEffect(() => {
    if (!word) {
      return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => res.json())
      .then((data) => setDictionary(data))
      .catch((err) => console.error(err));
  }, [word]);

  console.log(dictionary);

  return { dictionary };
};
