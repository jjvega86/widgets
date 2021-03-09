import React, { useState, useEffect } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      console.log("click");
    });
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; // null in React means don't render anything
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select A Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>{" "}
          {/* i typically means italics in HTML but Semantic UI uses it to overlay icons */}
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
