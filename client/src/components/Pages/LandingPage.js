import React, { useState } from "react";
import "./LandingPage.css";
import { Button, Form } from "react-bootstrap/";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import SignUp from "../Footer/SignUp";
import { useNavigate } from "react-router-dom";

const LandingPage = (props) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  props.funcNav(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
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

    setFormData({
      email: "",
      password: "",
    });
    navigate("/home", { replace: true });
  };

  return (
    <div className=" container-fluid bg-secondary h-100">
      <div className="row vh-100">
        <header id="splash" className="bg-dark ">
          <h1 className="staatliches fs-1 text-center text-light">Stud Light</h1>
          <h1 className="staatliches fs-1 text-center text-light">Stud Light</h1>
          <h1 className="staatliches fs-1 text-center text-light">Stud Light</h1>
          <h1 className="staatliches fs-1 text-center text-light">Stud Light</h1>
          <h1 className="staatliches fs-1 text-center text-light">Stud Light</h1>
          <h1 className="staatliches fs-1 text-center text-light">Stud Light</h1>
          <h1 className="staatliches fs-1 text-center text-light">Stud Light</h1>
          <h1 className="staatliches fs-1 text-center text-light">Stud Light</h1>
        </header>
        <div className="bg-secondary">
          <section className="row m-3 justify-content-between">
            <div className="col-4  ">
              <h1 className="staatliches fs-1 text-start text-dark">Stud Light</h1>
              <h6 className="staatliches text-start text-light">
                Increase your knowledge <br /> using flashcards to help you continually study.
              </h6>
            </div>
            <Form onSubmit={handleSubmit} className="col-6 col-md-4 col-lg-3 col-xxl-2 me-2 align-self-end">
              <Form.Group className="my-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="name@example.com" autoFocus value={formData.email} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="password" autoFocus value={formData.password} onChange={handleChange} />
              </Form.Group>
              <div>
                <div className="">
                  <Button type="submit" variant="danger" className="loginButton w-100 my-3">
                    Login
                  </Button>
                </div>
                <div>
                  <SignUp />
                </div>
              </div>
            </Form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
