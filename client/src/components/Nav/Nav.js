import React, { useState, useEffect } from "react";
import sl from "../../assets/sl.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
const Nav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="navbar bg-secondary fixed-top">
      <div className="headEl container justify-content-between">
        <div className="">
          <button
            className="btn btn-secondary btn-outline-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            fixed="bottom"
          >
            <img src={sl} alt="Bootstrap" width="30" height="30" />
          </button>
        </div>
        <div className="headTitle">
          <Link to="/" className="text-decoration-none">
            <span className="staatliches fs-1 text-center text-dark ">
              Stud Light
            </span>
          </Link>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start bg-light"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Welcome to Stud Light.
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <h6>Navigate your flashcard categories here.</h6>
          <div className="accordion accordion-flush" id="menu">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button bg-light text-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-FlashcardOne"
                  aria-expanded="false"
                  aria-controls="flush-FlashcardOne"
                >
                  HTML Flashcards
                </button>
              </h2>
              <div
                id="collapse"
                class="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body bg-light">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Boiler plate
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Links
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Scripts
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button bg-light text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Css Cards
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse show"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <button type="button" class="btn btn-secondary btn-sm m-1">
                  Element Styling
                </button>
                <button type="button" class="btn btn-secondary btn-sm m-1">
                  Custom Classes
                </button>
                <button type="button" class="btn btn-secondary btn-sm m-1">
                  Custom Ids
                </button>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button bg-light text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Java Script
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse show"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <button type="button" class="btn btn-secondary btn-sm m-1">
                  Linking style sheets
                </button>
                <button type="button" class="btn btn-secondary btn-sm m-1">
                  The Functions
                </button>
                <button type="button" class="btn btn-secondary btn-sm m-1">
                  Methods
                </button>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button bg-light text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
              >
                Html Cards
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse show"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <button type="button" class="btn btn-secondary btn-sm m-1">
                  Boiler plate
                </button>
                <button type="button" class="btn btn-secondary btn-sm m-1">
                  Links
                </button>
                <button type="button" class="btn btn-secondary btn-sm m-1">
                  Scripts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
