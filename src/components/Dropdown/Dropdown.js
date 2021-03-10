import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      console.log("body");
      if (ref.current && ref.current.contains(event.target)) {
        // ref is referring to the top level element in the Dropdown component
        // ref.current.contains is checking to see if the event was triggered inside that component
        // if the event is anywhere else, it will close the dropdown
        // otherwise, it does nothing
        // sees whether or not the element clicked on is inside Dropdown component
        // even though the 'item' elements in renderedItems are contained inside of the Dropdown component as children
        // they are not included in the ref object, so clicking on an individual item will skip this condition
        // and close the dropdown, same as clicking anywhere else in the body
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener(onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; // null in React means don't render anything
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          console.log("item");
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select A Color</label>
        <div
          onClick={() => {
            console.log("dropdown selection");
            setOpen(!open);
          }}
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
