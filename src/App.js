import "./styles.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Work from "./Work";
export default function App() {
  const [myStyle, setMyStyle] = useState("light");
  const toggleMode = () => {
    var txtArea = document.querySelector(".myBox");
    if (myStyle === "light") {
      setMyStyle("dark");
      document.body.style.backgroundColor = "grey";
      txtArea.style.backgroundColor = "grey";
      txtArea.style.color = "white";
    } else {
      setMyStyle("light");
      document.body.style.backgroundColor = "white";
      txtArea.style.backgroundColor = "white";
      txtArea.style.color = "black";
    }
  };
  const toggleModeRed = () => {
    var txtArea = document.querySelector(".myBox");
    if (myStyle === "light") {
      setMyStyle("dark");
      document.body.style.backgroundColor = "#380d0d";
      txtArea.style.backgroundColor = "#380d0d";
      txtArea.style.color = "white";
    } else {
      setMyStyle("light");
      document.body.style.backgroundColor = "white";
      txtArea.style.backgroundColor = "white";
      txtArea.style.color = "black";
    }
  };
  return (
    <div className="App">
      <Navbar
        mode={myStyle}
        toggleStyle={toggleMode}
        toggleStyleRed={toggleModeRed}
      />
      <Work mode={myStyle} />
    </div>
  );
}
