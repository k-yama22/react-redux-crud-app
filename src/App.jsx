import React from "react";
import PropTypes from "prop-types"

const TodosList = (props) => {
  const { profiles } = props;
  console.log(props)
  return (
    <div>
      <ul>
        {profiles.map((profile) => {
          return <div key={profile}><li>{profile}</li></div>;
        })}
      </ul>
    </div>
  );
};

const App = () => {
  const profiles = ["山口", 24 ];
  const dom = "Hi!";
  const onClickText = () => {
    console.log(dom);
  };
  return (
    <>
      <TodosList profiles={profiles} />
      <h1>Hello World</h1>
      <div>{dom}</div>
      <input type="text" onClick={onClickText} />
    </>
  );
};

export default App;
