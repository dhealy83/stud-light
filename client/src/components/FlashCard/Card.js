import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// All of the Bootstrap imports

import { Form, ToggleButton, Button, Col, Row, Container, Carousel, Card, ButtonGroup } from "react-bootstrap";
// All of the image imports
import cardBackground from "../../assets/cardBackground.jpg";
import CardData from "../Card/CardData";
// Local css files
import "./FlashCard.css";

const FlashCard = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "X", value: "1" },
    { name: "√", value: "2" },
  ];
  return (
    <div className="mb-5 h-100">
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect} className="card m-2 border boarder-2 boarder-secondary rounded-3">
          <Carousel.Item className="buttonCheckBox">
            <Col className="d-flex justify-content-evenly mx-3">
              <h1>First Card Title</h1>
            </Col>
            <img className="d-block w-100" src={cardBackground} alt="First slide" />
            <Carousel.Caption className="text-dark">
              <Container>
                <Col>
                  <Row>
                    <CardData />
                  </Row>
                </Col>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="buttonCheckBox">
            <Col className="d-flex justify-content-evenly mx-3">
              <h1>Second Card Title</h1>
            </Col>
            <img className="d-block w-100" src={cardBackground} alt="First slide" />
            <Carousel.Caption className="text-dark">
              <Container>
                <Col>
                  <Row>
                    <CardData />
                  </Row>
                </Col>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <ButtonGroup className="m-2 d-flex justify-content-end">
          {radios.map((radio, idx) => (
            <ToggleButton key={idx} id={`radio-${idx}`} type="radio" value={radio.value} name="radio" variant={idx % 2 ? "outline-success" : "outline-danger"} checked={radioValue === radio.value} onChange={(e) => setRadioValue(e.currentTarget.value)} size="lg">
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
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
              Save/Update
            </Button>
          </div>

          <div className="m-2">
            <Button variant="secondary" size="lg" className="w-100">
              Next Card
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

export default FlashCard;
