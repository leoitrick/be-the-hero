import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import heroImg from "../../assets/heroes.png";

function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />
        <form action="">
          <h1>Log in</h1>
          <input placeholder="Your ID" />
          <button className="button" type="submit">
            Enter
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />I don't have an account
          </Link>
        </form>
      </section>
      <img src={heroImg} alt="Heroes" />
    </div>
  );
}

export default Logon;
