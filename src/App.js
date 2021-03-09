import React, { useState } from "react";
// import Accordion from "./components/Accordion/Accordion";
// remember that Accordian is expecting an items array of objects as props
// import Search from "./components/Search/Search";
import Dropdown from "./components/Dropdown/Dropdown";

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};

export default App;
