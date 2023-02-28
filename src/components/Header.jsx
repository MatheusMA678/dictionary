import React from "react";
import { IoBookOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { gray, yellow, purple } from "tailwindcss/colors";
import Select from "react-select";
import Switch from "react-switch";
import { selectOptions } from "../data/data";

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

export default function Header({ setChecked, setSelectValue, isChecked }) {
  const handleChange = (e) => setSelectValue(e.value);
  const handleSwitch = (checked) => setChecked(checked);

  return (
    <header className="flex items-center justify-between">
      <IoBookOutline size={32} />
      <div className="flex gap-6 items-center">
        <div>
          <Select
            defaultValue={selectOptions[1]}
            options={selectOptions}
            onChange={handleChange}
            styles={selectStyles}
            isSearchable={false}
          />
        </div>
        <div className="h-8 w-px bg-gray-400" />
        <div className="flex items-center gap-4">
          <Switch
            onChange={handleSwitch}
            checked={isChecked}
            onColor={purple[500]}
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
  );
}
