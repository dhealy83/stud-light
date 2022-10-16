import React, { useState, useEffect } from "react";
import sl from "../../assets/sl.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import { QUERY_USER_COLLECTION } from "../../utils/queries";
import { DELETE_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

const Nav = () => {
  const [show, setShow] = useState(false);

  // This handles the navbar open and close
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // This helps us navigate pages
  const navigate = useNavigate();

  // This handles the delete user mutation and closes the modal
  const [deleteUser, { error, data }] = useMutation(DELETE_USER);

  const handleUserDelete = async (evt) => {
    evt.preventDefault();
    const userId = JSON.parse(localStorage.getItem("userData"));
    const id = userId._id;
    console.log(userId._id);
    try {
      // deleteUser(userId._id);

      await deleteUser({
        variables: { userId: id },
      });
    } catch (e) {
      console.log(e);
    }
    handleClose();
    Auth.logout();
  };

  const handleExpanded = () => {
    navigate("/NewCollection");
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
          <Link to="/home" className="text-decoration-none">
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
          <div className="m-3 mx-5">
            <Button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              variant="info"
              size="lg"
              className="w-100"
              onClick={handleExpanded}

              // onClick={navigate("/NewCollection")} this
            >
              Create New Collection
            </Button>
          </div>
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
              <Button variant="danger" onClick={handleUserDelete}>
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
