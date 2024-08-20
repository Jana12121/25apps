import React from "react";

export const Suggestions = ({ data, click }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li key={index} onClick={click}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};
