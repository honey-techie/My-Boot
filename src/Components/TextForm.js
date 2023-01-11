import React, { useState } from "react";
import copy from "copy-to-clipboard";
export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpclick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.setAlert("Text converted to Uppercase", "success");
  };
  const ClearText = () => {
    const newText = "";
    setText(newText);
    props.setAlert("Old Text Cleared", "success");
  };

  const handleLoclick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.setAlert("Text converted to Lowercase", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.setAlert("Text converted to Speech", "success");
  };
  const capitalizeHadler = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");

    setText(newText);
    props.setAlert("First letter's Capitalized", "success");
  };
  const copyToClipboard = () => {
    copy(text); //npm i --save copy-to-clipboard
    props.setAlert("Text copied to clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.setAlert("Extra Spaces removed from Text", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container fw-bold"
        style={{
          color: props.mode === "dark" ? "white" : "#2b2c2f",
        }}
      >
        <h2>{props.title}</h2>
        <label htmlFor="MyText" className="form-label">
          Example textarea
        </label>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="3"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2b2c2f",
              color: props.mode === "dark" ? "white" : "#2b2c2f",
            }}
          ></textarea>
        </div>
        <button className="btn btn-secondary mx-2 my-1" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-2 my-1" onClick={handleLoclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-secondary mx-2 my-1" onClick={speak}>
          Speak text
        </button>
        <button
          className="btn btn-secondary mx-2 my-1"
          onClick={capitalizeHadler}
        >
          capitalize First letter
        </button>
        <button
          className="btn btn-secondary mx-2 my-1"
          onClick={copyToClipboard}
        >
          copy To Clipboard
        </button>
        <button
          className="btn btn-secondary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-secondary mx-2 my-1" onClick={ClearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "#2b2c2f",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words, and{" "}
          {text.split(/\s+/).reduce((total, num) => total + num.length, 0)}
          characters
        </p>
        <p>Reading time: {0.008 * text.split(/\s+/).length} minutes.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something To Preview Here"}</p>
      </div>
    </>
  );
}
