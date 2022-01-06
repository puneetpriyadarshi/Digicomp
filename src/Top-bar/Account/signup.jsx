import React, { useState } from "react";
import "./login.css";
import Modal from "react-modal";
import { Textbox, PwdField, Submit } from "./input";
import InUp from "./inup";
import Login from "./login";
import { modalStyle } from "../modalStyle";

function SignUp() {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  return (
    <div className="popup-container extendheight">
      <InUp InUpTitle="Sign Up" />
      <div className="login-partner">
        <a href="/#">
          <img
            src="https://img.icons8.com/color/38/000000/google-logo.png"
            alt="Google icon"
          />
        </a>
        <a href="/#">
          <img
            src="https://img.icons8.com/fluent-systems-filled/38/000000/mac-os.png"
            alt="Aple icon"
          />
        </a>
        <a href="/#">
          <img
            src="https://img.icons8.com/fluent/38/000000/facebook-new.png"
            alt="FaceBook icon"
          />
        </a>
      </div>
      <form className="form-container signup-gap">
        <Textbox
          type="Text"
          id="username-Signup"
          placeholder="Enter username"
        />
        <Textbox
          type="Tel"
          id="Phone-Signup"
          placeholder="Enter Phone Number"
        />
        <Textbox type="Email" id="Email-Signup" placeholder="Enter Email" />
        <PwdField id="Password-signup" placeholder="Enter Password" />
        <PwdField id="cnf-password-signup" placeholder="Confirm Password" />
        <Submit id="submit-signup" value="Sign Up" />
      </form>
      <div className="alternative-opt-container">
        <p>
          Already registered! &nbsp;
          <a
            className="pointer-cursor"
            onClick={() => setModalLoginIsOpen(true)}
          >
            Log In
          </a>
          <Modal
            closeTimeoutMS={500}
            isOpen={modalLoginIsOpen}
            onRequestClose={() => setModalLoginIsOpen(false)}
            style={modalStyle}
          >
            <Login />
          </Modal>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
