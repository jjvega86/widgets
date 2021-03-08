import React from "react";
// import Accordion from "./components/Accordion/Accordion";
// remember that Accordian is expecting an items array of objects as props
// import Search from "./components/Search/Search";
import Dropdown from './components/Dropdown/Dropdown';

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  }
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
]

const App = () => {
  return (
    <div>
      <Dropdown />
    </div>
  );
};

export default App;
