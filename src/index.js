//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

let text = "";
// get current time
const currentTime = new Date().getHours();
//const currentTime = 13;
const customStyle = {
  color: "blue"
};

if (currentTime < 12) {
  text = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 20) {
  text = "Good Afternoon";
  customStyle.color = "green";
} else {
  text = "Good Night";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {text}
    </h1>
  </div>,
  document.querySelector("#root")
);
