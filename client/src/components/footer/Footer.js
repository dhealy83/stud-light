import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="navbar bg-secondary d-flex fixed-bottom">
      <div className="container col">
        <div className="container text-dark "></div>
        <button type="button" className="btn btn-light btn-sm">
          Donate
        </button>
        <button type="button" className="btn btn-light btn-sm">
          Login
        </button>
        <button type="button" className="btn btn-light btn-sm">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Footer;
