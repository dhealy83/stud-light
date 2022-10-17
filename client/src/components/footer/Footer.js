import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { FaGithub as GitHub } from "react-icons/fa";
import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";
import Donate from "./Donate";

const Footer = () => {
  return (
    <nav className="navbar bg-secondary d-flex fixed-bottom">
      <div className="container col">
        <div className="container text-dark "></div>

        <div>
          <Donate />
        </div>
        <div>
          <a href="https://github.com/dhealy83/stud-light" target="_blank" className="text-dark">
            {<GitHub size="2rem" />}
          </a>
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default Footer;
