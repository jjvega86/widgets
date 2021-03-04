import React from "react";
import Accordion from "./components/Accordion/Accordion";

const App = (props) => {

    const items = [
        {
            title: 'What is React?',
            content: 'React is a front-end JavaScript framework'
        },
        {
            title: 'Why use React?',
            content: 'React is the preferred way to create SPAs right now'
        },
        {
            title: 'How do you use React?',
            content: 'Create and orchestrate components!'
        }
    ]
  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
};

export default App;
