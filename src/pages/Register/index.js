import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

function Register() {
  return (
    <div>
      <div className="register-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be the Hero" />
            <h1>Create your Acoount</h1>
            <p>
              Create your account, log in into the platform and help other
              people find ONG cases
            </p>

            <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#e02041" />I don't have an account
            </Link>
          </section>
          <form
            action="
              "
          >
            <input placeholder="ONG Name" />
            <input type="email" placeholder="Email" />
            <input placeholder="Number" />
            <div className="input-group">
              <input placeholder="City" />
              <input placeholder="State" style={{ width: 95 }} />
            </div>
            <button className="button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
