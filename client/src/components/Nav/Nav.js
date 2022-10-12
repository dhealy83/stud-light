import React, { useState, useEffect } from "react";
import sl from "../../assets/sl.png";

const Nav = () => {
  return (
    <nav class="navbar bg-secondary">
      <button
        class="btn btn-secondary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <img src={sl} alt="Bootstrap" width="30" height="24" />
      </button>

      <div class="headTitle">
        <span class="staatliches fs-1 text-center">Stud Light</span>
      </div>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Welcome to Stud Light.
            <br /> Navigate your flashcard categories here.
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item ">
              <h2 class="accordion-header " id="headingOne">
                {/* TODO:Need to create dynamic ids and out them in this element */}
                <button
                  class="accordion-button bg-light"
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
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                // TODO://Need to create dynamic ids and out them in this element
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

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button bg-light"
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
                  class="accordion-button bg-light"
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
                  class="accordion-button bg-light"
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
      </div>
    </nav>
  );
};

export default Nav;
