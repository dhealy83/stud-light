import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import OffcanvasNav from "../Nav/Nav";

const NewCollection = () => {
  return (
    <>
      <OffcanvasNav />
      <div className="m-2">
        <Form className="wholeCard">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Add a title to your collection!!!</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Link to="/AddCard">
            <Button variant="primary" type="submit">
              Save New Collection
            </Button>
          </Link>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default NewCollection;
