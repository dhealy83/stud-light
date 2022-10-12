import React, { useState, useEffect } from "react";
import sl from "../../assets/sl.png";

const Nav = () => {
  return (
    <nav className="navbar bg-secondary">
      <div className="headEl container justify-content-between">
        <button
          className="btn btn-secondary btn-outline-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <img src={sl} alt="Bootstrap" width="30" height="30" />
        </button>

        <div className="headTitle">
          <span className="staatliches fs-1 ">Stud Light</span>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Welcome to Stud Light.
            <br /> Navigate your flashcard categories here.
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item ">
              <h2 className="accordion-header " id="headingOne">
                {/* TODO:Need to create dynamic ids and out them in this element */}
                <button
                  className="accordion-button bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  // TODO:Need to create dynamic ids and out them in this element
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  //   TODO://Need to create dynamic ids and out them in this element
                >
                  Html Cards
                </button>
              </h2>
              <div
                id="collapseOne"
                // TODO://Need to create dynamic ids and out them in this element
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                // TODO://Need to create dynamic ids and out them in this element
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
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

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button bg-light"
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
                className="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Element Styling
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Custom classNamees
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Custom Ids
                  </button>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button bg-light"
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
                className="accordion-collapse collapse show"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Linking style sheets
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    The Functions
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Methods
                  </button>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button bg-light"
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
                className="accordion-collapse collapse show"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
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
        </div>
      </div>
    </nav>
  );
};

export default Nav;
