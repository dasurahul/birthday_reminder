import React, { useState } from "react";
import Birthday from "./Birthday";
import "./Birthdays.css";
const Birthdays = (props) => {
  const [arr, setArr] = useState(props.birthdayData);
  const clickHandler = () => {
    setArr([]);
  };
  return (
    <div className="birthdays-container">
      <div style={{ color: "#444", letterSpacing: "2px" }}>
        {arr.length} birthdays today
      </div>
      {arr.map((person) => {
        return (
          <Birthday img={person.img} name={person.name} age={person.age} />
        );
      })}
      <button className="btn" onClick={clickHandler}>
        Clear All
      </button>
    </div>
  );
};

export default Birthdays;
