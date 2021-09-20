import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

function Profile() {
  return (
    <div>
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="Be the Hero" />
          <span>Welcome to,</span>
          <Link to="/incidents/new" className="button">
            Register a new case
          </Link>
          <button type="button">
            <FiPower size={18} color="#e02041" />
          </button>
        </header>
        <h1>Cases Registred</h1>
        <ul>
          <li>
            <strong>CASE:</strong>
            <p>Test case</p>

            <strong>DESCRIPTION:</strong>
            <p>Testing Description</p>

            <strong>PRICE:</strong>
            <p>$120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASE:</strong>
            <p>Test case</p>

            <strong>DESCRIPTION:</strong>
            <p>Testing Description</p>

            <strong>PRICE:</strong>
            <p>$120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASE:</strong>
            <p>Test case</p>

            <strong>DESCRIPTION:</strong>
            <p>Testing Description</p>

            <strong>PRICE:</strong>
            <p>$120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASE:</strong>
            <p>Test case</p>

            <strong>DESCRIPTION:</strong>
            <p>Testing Description</p>

            <strong>PRICE:</strong>
            <p>$120</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
