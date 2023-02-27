import React, { useState } from "react";
import { useDictionary } from "./hooks/useDictionary";
import {
  HiMagnifyingGlass,
  IoBookOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/all";
import { gray, purple, yellow } from "tailwindcss/colors";
import Select from "react-select";
import Switch from "react-switch";

const options = [
  { label: "Serif", value: "Serif" },
  { label: "Sans", value: "Sans" },
  { label: "Mono", value: "Mono" },
];

const selectStyles = {
  container: (styles) => ({
    ...styles,
    cursor: "pointer",
  }),
  control: (styles) => ({
    // ...styles,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    background: "white",
    borderRadius: "5px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (styles) => ({
    // ...styles,
    position: "absolute",
    width: "100%",
    marginTop: "10px",
    background: "white",
    borderRadius: "5px",
    color: "black",
    padding: "5px",
    boxShadow: "0 0 5px rgba(0, 0, 0, .2)",
  }),
  menuList: (styles) => ({
    ...styles,
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  }),
  option: (styles) => ({
    ...styles,
    transition: "0.2s",
    cursor: "pointer",
    borderRadius: "5px",
  }),
};

export default function App() {
  const [selectValue, setSelectValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [word, setWord] = useState("");
  const { dictionary } = useDictionary({ word: word });

  const handleChange = (e) => setSelectValue(e.value);
  const handleSwitch = (checked) => setChecked(checked);

  function fontChange() {
    if (selectValue === "Serif") {
      return "font-serif";
    } else if (selectValue === "Sans") {
      return "font-sans";
    } else if (selectValue === "Mono") {
      return "font-mono";
    }
  }

  function themeChange() {
    if (isChecked) {
      return "bg-gray-700 text-white";
    } else {
      return "";
    }
  }

  return (
    <div
      className={`flex flex-col gap-8 p-12 transition min-h-screen ${fontChange()} ${themeChange()}`}
    >
      <header className="flex items-center justify-between">
        <IoBookOutline size={32} />
        <div className="flex gap-6 items-center">
          <div className="">
            <Select
              defaultValue={options[0]}
              options={options}
              onChange={handleChange}
              styles={selectStyles}
              isSearchable={false}
            />
          </div>
          <div className="h-8 w-px bg-gray-400"></div>
          <div className="flex items-center gap-4">
            <Switch
              onChange={handleSwitch}
              checked={isChecked}
              onColor="#5500ff"
              activeBoxShadow="none"
              uncheckedIcon={false}
              checkedIcon={false}
              handleDiameter={20}
            />
            {!isChecked ? (
              <IoMoonOutline size={28} color={gray[500]} />
            ) : (
              <IoSunnyOutline size={28} color={yellow[400]} />
            )}
          </div>
        </div>
      </header>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full h-12 rounded-xl bg-gray-200 flex items-center justify-between"
      >
        <input
          type="text"
          placeholder="Type a word"
          className="flex-1 h-full bg-transparent px-4 outline-none placeholder:text-gray-600 text-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="h-full px-4"
          title="button"
          onClick={() => setWord(inputValue)}
        >
          <HiMagnifyingGlass size={24} color={purple[600]} />
        </button>
      </form>
      {dictionary.map((dict) => (
        <main key={dict.word} className="flex flex-col gap-4">
          <div>
            <h1 className="text-4xl font-bold">{dict.word}</h1>
            <span className="text-purple-500 text-lg font-medium">
              {dict.phonetics[1].text}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="font-bold font-cursive text-xl">noun</h2>
            <div className="w-full h-px bg-gray-400" />
          </div>
          <section>
            <h2 className="text-gray-500 font-normal">Meaning</h2>
            <ul className="p-5 pl-10 space-y-1 list-outside list-disc">
              {dict.meanings[0].definitions.map((def, index) => (
                <li className="text-purple-600" key={index}>
                  <span className="text-black">{def.definition}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 items-center">
              <h2 className="text-gray-500">Synonyms</h2>
              <span className="text-purple-600 font-bold">
                {dict.meanings[0].synonyms}
              </span>
            </div>
          </section>
        </main>
      ))}
    </div>
  );
}
