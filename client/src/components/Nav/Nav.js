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
                <button
                  class="accordion-button bg-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Html Cards
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
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
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Css Cards
                </button>
              </h2>
              <div
                id="collapseOne"
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
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Java Script
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
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
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Html Cards
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
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
