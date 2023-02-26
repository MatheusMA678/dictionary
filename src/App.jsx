import React, { useState } from "react";
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
  control: (styles) => ({
    ...styles,
    border: "none",
    outline: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

export default function App() {
  const [selectValue, setSelectValue] = useState("");
  const [isChecked, setChecked] = useState(false);

  const handleChange = (e) => setSelectValue(e.value);
  const handleSwitch = (checked) => setChecked(checked);

  function fontChange() {
    if (selectValue === "Serif") {
      return "font-serif";
    } else if (selectValue === "Sans") {
      return "font-['Poppins']";
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
          className="flex-1 h-full bg-transparent px-4 outline-none placeholder:text-gray-600"
        />
        <button type="submit" className="h-full px-4">
          <HiMagnifyingGlass size={24} color={purple[600]} />
        </button>
      </form>
      <main>
        <h1>teste</h1>
      </main>
    </div>
  );
}
