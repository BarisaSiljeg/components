import React from "react";

const date = new Date();
const currentTime = date.getHours();

let greeting;
const customStyle = {
  color: ""
};

function Heading() {
  if (currentTime < 12) {
    customStyle.color = "red";
    greeting = "Good Morning";
  } else if (currentTime < 18) {
    customStyle.color = "blue";
    greeting = "Good  Afternon";
  } else {
    customStyle.color = "green";
    greeting = "Good  Night";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
