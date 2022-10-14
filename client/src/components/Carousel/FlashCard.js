import React, { useState, useEffect } from "react";
import {
  FaQuestion as Question,
  FaExclamation as Answer,
} from "react-icons/fa";

// import { Link } from "react-router-dom";
// All of the Bootstrap imports

import {
  // Form,
  ToggleButton,
  // Button,
  Col,
  Row,
  Container,
  Carousel,
  // Card,
  ButtonGroup,
} from "react-bootstrap";
// All of the image imports
import cardBackground from "../../assets/cardBackground.jpg";

// import CardData from "./CardData";

// Local css files
import "./FlashCard.css";

const FlashCard = (props) => {
  const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const [toggle, setToggle] = useState(false);
  console.log(props);
  const radios = [
    { name: "X", value: "1" },
    { name: "√", value: "2" },
  ];
  return (
    <Carousel.Item className="buttonCheckBox">
      <Col className="d-flex justify-content-evenly mx-3">
        <h1>First Card Title</h1>
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
      <img className="d-block w-100" src={cardBackground} alt="First slide" />
      <Carousel.Caption className="text-dark">
        <Container>
          <Col>
            <Row>
              {/* {toggle ? (
                <a href="#" onClick={() => setToggle(!toggle)}>
                  <CardIcon icon={<Question size="50" />} />
                </a>
              ) : (
                <a href="#" onClick={() => setToggle(!toggle)}>
                  <CardIcon icon={<Answer size="50" />} />
                </a>
              )} */}

              {/* <a href="#" onClick={() => setToggle(!toggle)}>
       <CardIcon icon={<Question size="50" />} />
      </a> */}
              {toggle && (
                <div className="flip-horizontal-bottom">
                  <div class="card">
                    <div class="card-body">
                      <p class="card-text">{props.answer}</p>
                    </div>
                  </div>
                  <p className="text-success">"Flipped"</p>
                </div>
              )}
              {!toggle && (
                <div className="flip-horizontal-bottom">
                  <div class="card">
                    <div class="card-body">
                      <p class="card-text">{props.question}</p>
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
};

export default FlashCard;
