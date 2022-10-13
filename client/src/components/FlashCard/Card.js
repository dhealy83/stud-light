import React, { useState, useEffect } from "react";
// All of the Bootstrap imports
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Form from "react-bootstrap/Form";
// All of the image imports
import cardBackground from "../../assets/cardBackground.jpg";
// Local css files
import "./FlashCard.css";
import CardData from "../Card/CardData";

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
    <>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect} className="card m-2 border boarder-2 boarder-secondary rounded-3">
          <Carousel.Item className="buttonCheckBox">
            <Col className="d-flex justify-content-between mx-3">
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
      </div>
    </>
  );
};

export default FlashCard;