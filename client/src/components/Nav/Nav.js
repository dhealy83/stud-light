import React, { useState, useEffect } from "react";
import sl from "../../assets/sl.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { QUERY_USER_COLLECTION } from "../../utils/queries";
import { DELETE_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
const Nav = () => {
  const [show, setShow] = useState(false);

  // This handles the navbar open and close
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // This handles the delete user mutation and closes the modal
  const [deleteUser, { error, data }] = useMutation(DELETE_USER);

  const handleUserDelete = async (evt) => {
    evt.preventDefault();
    const userId = JSON.parse(localStorage.getItem("userData"));
    const id = userId._id;
    console.log(userId._id);
    try {
      // deleteUser(userId._id);
      const { data } = await deleteUser({
        variable: { userId: "$userId " },
      });
    } catch (e) {
      console.log(e);
    }
    handleClose();
  };
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
                  className="accordion-button collapsed bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-FlashcardOne"
                  aria-expanded="false"
                  aria-controls="flush-FlashcardOne"
                >
                  HTML Flashcards
                </button>
              </h2>
              {/* <div
                id="flush-FlashcardOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#menu"
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
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  CSS Flashcards
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#menu"
              >
                <div className="accordion-body bg-light">
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
                    Custom Classes
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
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  JavaScript Flashcards
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#menu"
              >
                <div className="accordion-body bg-light">
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
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Test Suite A
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#menu"
              >
                <div className="accordion-body bg-light">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Test item #1
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Test item #2
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Test item #3
                  </button>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Test Suite B
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#menu"
              >
                <div className="accordion-body bg-light">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Test item #1
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Test item #2
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Test item #3
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="m-2">
          <div>
            <Button
              variant="secondary"
              onClick={handleShow}
              className="mb-5 ms-3"
            >
              Delete Account
            </Button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you'd like to delete your account?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleUserDelete}>
                Delete Account
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
