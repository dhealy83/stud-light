import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    handleClose();
    setFormData({
      email: "",
      password: "",
      username: "",
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                autoFocus
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="password"
                autoFocus
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="secondary">
              Sign Up
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default SignUp;
