import React from "react";
import "./Birthday.css";
const Birthday = (props) => {
  return (
    <div className="birthday-container">
      <img className="person-image" src={props.img} alt={props.name} />
      <div className="person-details">
        <div className="person-name">{props.name}</div>
        <div className="person-age">{props.age} years</div>
      </div>
    </div>
  );
};

export default Birthday;
