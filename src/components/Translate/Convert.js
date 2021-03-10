import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        // empty second parameter. Nothing sent in the body
        // third parameter sends along query string parameters
        params: {
          q: text,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        },
      }
    );
  }, [language, text]);
  return <div></div>;
};

export default Convert;
