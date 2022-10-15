import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ADD_COLLECTION } from "../../utils/mutations";
import Auth from "../../utils/auth";

const NewCollection = () => {
  const [formData, setFormData] = useState({
    title: "",
  });

  const [addCollection, { error, data }] = useMutation(ADD_COLLECTION);

  const handleChange = (evt) => {
    const { title, value } = evt.target;
    console.log(value);
    setFormData({ ...formData, title: value });
  };

  const handleAddCollection = async (evt) => {
    evt.preventDefault();
    const userId = JSON.parse(localStorage.getItem("userData"));
    const id = userId._id;
    console.log(id);
    await addCollection({
      variables: {
        userId: id,
        title: formData.title,
        context: Auth.getProfile().data.userId,
      },
    });
  };

  return (
    <div className="m-2">
      <Form className="wholeCard" onSubmit={handleAddCollection}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Add a title to your collection!!!</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Add collection title here"
            autoFocus
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Link to="/AddCard">
          <Button
            variant="primary"
            type="submit"
            // onSubmit={handleAddCollection}
          >
            Save New Collection
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default NewCollection;
