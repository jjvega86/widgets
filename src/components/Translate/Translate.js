import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = (props) => {
  const [selectedLanguage, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="form">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={selectedLanguage}
        onSelectedChange={setLanguage}
        label="Select a Language"
      />
    </div>
  );
};

export default Translate;
