import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaQuestion as Question,
  FaExclamation as Answer,
} from "react-icons/fa";
// All of the Bootstrap imports

import FlashCard from "./FlashCard";

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

const fakeCollection = {
  _id: "mnbvftyuiolmnbghj",
  title: "test data",
  cards: [
    {
      _id: "1",
      title: "Title1",
      question: "Question1",
      answer: "Answer1",
    },
    {
      _id: "2",
      title: "Title2",
      question: "Question2",
      answer: "Answer2",
    },
    {
      _id: "3",
      title: "Title3",
      question: "Question3",
      answer: "Answer3",
    },
  ],
};

const FlashCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setToggle(false);
  };

  const [toggle, setToggle] = useState(false);

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "X", value: "1" },
    { name: "√", value: "2" },
  ];
  return (
    <div className="wholeCard h-100">
      <div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="card m-2 border boarder-2 boarder-secondary rounded-3"
          interval="10000000"
        >
          {fakeCollection.cards.map((obj) => (
            <Carousel.Item className="buttonCheckBox" key={obj._id}>
              <Col className="d-flex justify-content-evenly mx-3">
                <h1>card id {obj._id}</h1>
                <ButtonGroup className="m-2 d-flex justify-content-end">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      value={radio.value}
                      name="radio"
                      variant={idx % 2 ? "outline-success" : "outline-danger"}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                      size="lg"
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
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
                          <CardIcon icon={<Question size="50" />} />
                        </a>
                      ) : (
                        <a href="#" onClick={() => setToggle(!toggle)}>
                          <CardIcon icon={<Answer size="50" />} />
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

            // <FlashCard
            //   key={obj._id}
            //   answer={obj.answer}
            //   question={obj.question}
            // />
          ))}
        </Carousel>
      </div>
      <div className="d-flex">
        <div className="col v-100">
          <Card className="m-2">
            <Form className="bg-secondary rounded-2">
              <Form.Group>
                <Form.Label className="m-2 text-white">Notes</Form.Label>
                <Form.Control as="textarea" rows={8} />
              </Form.Group>
            </Form>
          </Card>

          <div className="m-2">
            <Button variant="secondary" size="lg" className="w-100">
              Update
            </Button>
          </div>
          <div className="m-2">
            <Button variant="secondary" size="lg" className="w-100">
              Delete Card
            </Button>
          </div>
          <div className="m-2 mt-auto">
            <Link to="/AddCard">
              <Button variant="secondary" size="lg" className="w-100">
                Add A New Card
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardIcon = ({ icon }) => <div>{icon}</div>;
export default FlashCarousel;
