import React, { useState } from "react";
import PropTypes from "prop-types";
import { TodoList } from "./TodoList";

const App = () => {
  const onClickPlus = () => {
    setNum(num + 1);
  };
  const onClickMinus = () => {
    setNum(num - 1);
  };

  const [text, setText] = useState("");
  const [num, setNum] = useState(0);
  const [labelText, setLabelText] = useState("初期表示");
  const profiles = [
    { name: "山口", age: 24 },
    { name: "田中", age: 26 },
    { name: 2, age: 29 },
  ];

  const dom = `Hi,${num}`;
  const onChangeText = (event) => {
    setText(event.target.value);
  };
  const onclickDecide = () => {
    setLabelText(text);
  };
  return (
    <>
      {/* <div>
        {profiles.map((profile) => {
          return <TodosList name={profile.name} age={profile.age} />;
        })}
      </div> */}
      <TodoList profiles={profiles} />
      <h1>Hello World</h1>
      <div>{dom}</div>
      <input type="text" onChange={onChangeText} value={text} />
      <button onClick={onClickPlus}>+1</button>
      <button onClick={onClickMinus}>-1</button>
      <button id="decide" onClick={onclickDecide}>
        決定
      </button>
      <label htmlFor="decide">{labelText}</label>
    </>
  );
};
TodoList.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      age: PropTypes.number,
    })
  ),
};

export default App;
