import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap/";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Login = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formData },
      });
      console.log(data.login.user);
      Auth.login(data.login.token, JSON.stringify(data.login.user));
    } catch (e) {
      console.error(e);
    }

    handleClose();
    setFormData({
      email: "",
      password: "",
    });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="name@example.com" autoFocus value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="password" autoFocus value={formData.password} onChange={handleChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="secondary">
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Login;
