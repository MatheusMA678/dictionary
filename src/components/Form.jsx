import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { purple } from "tailwindcss/colors";

export default function Form({ inputValue, setInputValue, setText }) {
  return (
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
        className="h-full px-4 outline-none"
        title="button"
        onClick={() => setText(inputValue)}
      >
        <HiMagnifyingGlass size={24} color={purple[600]} />
      </button>
    </form>
  );
}
