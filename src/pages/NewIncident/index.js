import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Create a New Case</h1>
          <p>
            Describe the case as much detailed as possible to find a "Hero" to
            solve the situation
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Back to Home Page
          </Link>
        </section>
        <form
          action="
              "
        >
          <input placeholder="Case Title" />
          <textarea placeholder="Description" />
          <input placeholder="Price in Dolar" />

          <button className="button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;
