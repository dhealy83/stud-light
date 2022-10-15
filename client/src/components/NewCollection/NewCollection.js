import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewCollection = () => {
  return (
    <div className="m-2">
      <Form className="wholeCard">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enjoy your collection!!!</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Link to="/AddCard">
          <Button variant="primary" type="submit">
            Create New Collection
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default NewCollection;
