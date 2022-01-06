import React, { useState } from "react";
import "./input.css";

function Textbox(props) {
  return (
    <input
      className="input-field"
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
    />
  );
}

function TextboxContactUs(props) {
  return (
    <input
      className="inputfieldwith100by100width input-field"
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      className="input-field input-area"
      id={props.id}
      placeholder={props.placeholder}
    />
  );
}

function PwdField(props) {
  const [cngpwd, setcngpwd] = useState("password");
  const [cngimg, setcngimg] = useState("far fa-eye eyes");

  function showpwd() {
    if (cngpwd === "password") {
      setcngpwd("text");
      setcngimg("far fa-eye-slash  eyes");
    } else {
      setcngpwd("password");
      setcngimg("far fa-eye eyes");
    }
  }

  return (
    <div className="password-area">
      <input
        className="input-field"
        type={cngpwd}
        id={props.id}
        placeholder={props.placeholder}
      />

      <i class={cngimg} onClick={showpwd}></i>
    </div>
  );
}

function Submit(prop) {
  return (
    <input
      className="input-field submit"
      type="submit"
      id={prop.id}
      value={prop.value}
    />
  );
}

function SubmitContactUs(prop) {
  return (
    <input
      className="input-field submit inputfieldwith100by100width"
      type="submit"
      id={prop.id}
      value={prop.value}
    />
  );
}
// function TnC(prop) {
//   return (
//     <input className="checkbox-field" type="checkbox" value={prop.value} />
//     <label>{prop.value}</label>
//   );
// }

export {
  Textbox,
  PwdField,
  Textarea,
  TextboxContactUs,
  Submit,
  SubmitContactUs,
};
