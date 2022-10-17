import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_USER_COLLECTION } from "../../utils/queries";
import {
  FaQuestion as Question,
  FaExclamation as Answer,
} from "react-icons/fa";
// All of the Bootstrap imports
import { Col, Container, Carousel, Card, ButtonGroup } from "react-bootstrap";
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
      answer: "Answers to your questions will be on the back of your flashcards!",
      notes: "Click the right side of the card to move to the next card.",
      radioValue: 0,
    },
    {
      _id: "Start Creating Flashcards!",
      title: "Title2",
      question:
        "Let's get you studying!",
      answer: "First you will have to create a collection of Flashcards",
      notes:
        "Click on the 'Create New Collection' button to get started",
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

  const [toggle, setToggle] = useState(false);

  const userId = JSON.parse(localStorage.getItem("userData"));
  const id = userId._id;

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
      <div className="d-flex justify-content-center h-75">
        <div className="wholeCard ">
          <div className="">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              className="card m-2 border boarder-2 boarder-secondary rounded-3 "
              interval="10000000"
            >
              {fakeCollection.cards.map((obj, i) => {
                return (
                  <Carousel.Item className="buttonCheckBox" key={obj._id}>
                    <RadioButtons key={i} index={i} />
                    <Col className="d-flex justify-content-center mx-3">
                      <h1>{obj._id}</h1>
                      <ButtonGroup className="m-2 d-flex justify-content-end"></ButtonGroup>
                    </Col>
                    <img
                      className="d-block w-100"
                      src={cardBackground}
                      alt="First slide"
                    />
                    <div className="">
                      <Carousel.Caption className="cardText text-dark ">
                        <Container>
                          <Col className="">
                            {toggle ? (
                              <a href="#" onClick={() => setToggle(!toggle)}>
                                <CardIcon icon={<Question size="30" />} />
                              </a>
                            ) : (
                              <a href="#" onClick={() => setToggle(!toggle)}>
                                <CardIcon icon={<Answer size="30" />} />
                              </a>
                            )}

                            {toggle && (
                              <div className="flip-horizontal-bottom">
                                <div class="">
                                  <p class="card-text">{obj.answer}</p>
                                </div>
                              </div>
                            )}
                            {!toggle && (
                              <div className="flip-horizontal-bottom">
                                <div class="">
                                  <p class="card-text">{obj.question}</p>
                                </div>
                              </div>
                            )}
                          </Col>
                        </Container>
                      </Carousel.Caption>
                    </div>
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
          <div className="m-2 mt-auto"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const CardIcon = ({ icon }) => <div>{icon}</div>;
export default HomePage;
