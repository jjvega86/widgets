import React from "react";
// import Accordion from "./components/Accordion/Accordion";
// remember that Accordian is expecting an items array of objects as props
// import Search from "./components/Search/Search";
// import Dropdown from "./components/Dropdown/Dropdown";
import Translate from "./components/Translate/Translate";

const App = () => {
  return (
    <div className="ui middle aligned center aligned grid" style={{maxWidth: '450px', textAlign: 'center'}}>
      <div className="column">
        <Translate />
      </div>
    </div>
  );
};

export default App;
