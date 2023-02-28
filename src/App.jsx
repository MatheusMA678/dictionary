import React, { useState } from "react";
import { useDictionary } from "./hooks/useDictionary";
import Header from "./components/Header";
import Form from "./components/Form";
import Main from "./components/Main";
import Placeholder from "./components/Placeholder";

export default function App() {
  const [selectValue, setSelectValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [text, setText] = useState("");
  const { meanings, phonetics, word, error, data } = useDictionary({
    text: text,
  });

  function fontChange() {
    if (selectValue === "Serif") {
      return "font-serif";
    } else if (selectValue === "Sans") {
      return "font-sans";
    } else if (selectValue === "Mono") {
      return "font-mono text-sm";
    }
  }

  const themeChange = isChecked ? "bg-gray-700 text-white" : "";

  return (
    <div
      className={`flex flex-col gap-8 p-12 transition min-h-screen ${fontChange()} ${themeChange}`}
    >
      <Header
        setChecked={setChecked}
        setSelectValue={setSelectValue}
        isChecked={isChecked}
      />
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        setText={setText}
      />
      {error ? (
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <div className="flex flex-col gap-2">
            <p>{data.message}</p>
            <p>{data.resolution}</p>
          </div>
        </div>
      ) : (
        <Main
          meanings={meanings}
          phonetics={phonetics}
          word={word}
          spanTheme={isChecked ? "text-white" : "text-black"}
        />
      )}
    </div>
  );
}
