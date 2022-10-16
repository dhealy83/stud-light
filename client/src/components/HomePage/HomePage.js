import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useQuery } from "@apollo/client";

import { QUERY_USER_COLLECTION } from "../../utils/queries";
import {
  FaQuestion as Question,
  FaExclamation as Answer,
} from "react-icons/fa";
// All of the Bootstrap imports
import {
  Form,
  ToggleButton,
  Button,
  Col,
  Row,
  Container,
  Carousel,
  Card,
  ButtonGroup,
} from "react-bootstrap";
// All of the image imports
import cardBackground from "../../assets/cardBackground.jpg";
// import CardData from "./CardData";
// Local css files
import "./FlashCard.css";
import RadioButtons from "./RadioButtons";

import OffcanvasNav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const fakeCollection = {
  _id: "mnbvftyuiolmnbghj",
  title: "test data",
  cards: [
    {
      _id: "How to use the flashcards!",
      title: "Title1",
      question: "Click the ! button to flip the card.",
      answer: "Great! now let's get you logged in.",
      notes: "Click the right side of the card to move to the next card.",
      radioValue: 0,
    },
    {
      _id: "Sign Up!",
      title: "Title2",
      question:
        "Click the sign up button on the bottom right of the page so you can create your first collection?",
      answer: "Answer2",
      notes:
        "Once signed up you should click the create new collection button so you can start making your cards. You can make as many collections as you'd like and navigate between them.",
      radioValue: 1,
    },
  ],
};

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setToggle(false);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [toggle, setToggle] = useState(false);

  const userId = JSON.parse(localStorage.getItem("userData"));
  const id = userId._id;
  console.log(userId);
  const { loading, data, error } = useQuery(
    QUERY_USER_COLLECTION,
    {
      variables: { userId: id },
    },
    []
  );
  if (loading) return "Loading";

  localStorage.setItem("userCollections", JSON.stringify(data));
  return (
    <>
      <OffcanvasNav />
      <div className="wholeCard h-100">
        <div>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="card m-2 border boarder-2 boarder-secondary rounded-3"
            interval="10000000"
          >
            {fakeCollection.cards.map((obj, i) => {
              return (
                <Carousel.Item className="buttonCheckBox" key={obj._id}>
                  <RadioButtons key={i} index={i} />
                  <Col className="d-flex justify-content-evenly mx-3">
                    <h1>{obj._id}</h1>
                    <ButtonGroup className="m-2 d-flex justify-content-end"></ButtonGroup>
                  </Col>
                  <img
                    className="d-block w-100"
                    src={cardBackground}
                    alt="First slide"
                  />
                  <Carousel.Caption className="text-dark">
                    <Container>
                      <Col>
                        <Row>
                          {toggle ? (
                            <a href="#" onClick={() => setToggle(!toggle)}>
                              <CardIcon icon={<Question size="30" />} />
                            </a>
                          ) : (
                            <a href="#" onClick={() => setToggle(!toggle)}>
                              <CardIcon icon={<Answer size="30" />} />
                            </a>
                          )}

                          {/* <a href="#" onClick={() => setToggle(!toggle)}>
                 <CardIcon icon={<Question size="50" />} />
                </a> */}
                          {toggle && (
                            <div className="flip-horizontal-bottom">
                              <div class="card">
                                <div class="card-body">
                                  <p class="card-text">{obj.answer}</p>
                                </div>
                              </div>
                              <p className="text-success">"Flipped"</p>
                            </div>
                          )}
                          {!toggle && (
                            <div className="flip-horizontal-bottom">
                              <div class="card">
                                <div class="card-body">
                                  <p class="card-text">{obj.question}</p>
                                </div>
                              </div>
                              <p className="text-info">"Not Flipped"</p>
                            </div>
                          )}
                        </Row>
                      </Col>
                    </Container>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className="d-flex">
          <div className="col v-100">
            <Card className="m-2">
              <Card.Title className="bg-secondary text-white p-2 rounded-top">
                Notes
              </Card.Title>
              <Card.Body>
                <Card.Text>{fakeCollection.cards[index].notes}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="m-2 mt-auto">
          <Link to="/NewCollection">
            <Button variant="secondary" size="lg" className="w-100">
              Create New Collection
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

const CardIcon = ({ icon }) => <div>{icon}</div>;
export default HomePage;
