import React, { useState } from "react";

export default function Work(props) {
  const textUpdate = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const toCapitalize = () => {
    let newText = text.toLowerCase();
    setText(newText.charAt(0).toUpperCase() + newText.slice(1));
  };
  const clearAll = () => {
    setText("");
  };
  const toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const toCopy = () => {
    const text = document.querySelector(".myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <textarea
        className="form-control myBox"
        value={text}
        type="text"
        onChange={textUpdate}
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        id="floatingTextarea"
        rows="4"
      ></textarea>
      <button onClick={toCapitalize} type="button" className="btn btn-primary">
        capitalise text
      </button>
      <button onClick={toUpper} type="button" className="btn btn-secondary">
        to upper case
      </button>
      <button type="button" onClick={toLower} className="btn btn-success">
        to lower case
      </button>
      <button type="button" onClick={clearAll} className="btn btn-danger">
        clear all
      </button>
      <button type="button" onClick={toCopy} className="btn btn-warning">
        copy text
      </button>
      <div>{text.length > 0 ? text : "type something in the text area"}</div>
      <div>
        you entered {text.length} letters & {text.split(" ").length} words
      </div>
      <button type="button" onClick={removeSpaces} className="btn btn-success">
        remove extra spaces
      </button>
      <div></div>
      <div></div>
    </div>
  );
}
