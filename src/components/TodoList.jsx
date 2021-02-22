import React from "react";

export const TodoList = (props) => {
  const { profiles } = props;
  console.log(props);
  return (
    <div>
      <ul>
        {profiles.map((prop, index) => {
          return (
            <li key={index}>
              {prop.name}と申します。{prop.age}歳です
            </li>
          );
        })}
      </ul>
    </div>
  );
};
