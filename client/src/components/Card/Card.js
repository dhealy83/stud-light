import React, { useState, useEffect } from "react";
// All of the Bootstrap imports
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

const Card = () => {
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
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="card m-2 border boarder-2 boarder-secondary rounded-3
      
    "
      >
        <Carousel.Item className="buttonCheckBox">
          <Col className="d-flex justify-content-evenly mx-3">
            <h1>First Card Title</h1>
            <ButtonGroup className="">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? "outline-success" : "outline-danger"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  size="sm"
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
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Row>
              </Col>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item className="buttonCheckBox">
          <Col className="d-flex justify-content-between">
            <h1>Second Card Title</h1>
            <ButtonGroup className="">
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? "outline-success" : "outline-danger"}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  size="sm"
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
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Row>
              </Col>
            </Container>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button variant="secondary" size="sm">
        Save/Update
      </Button>
    </>
  );
};

export default Card;
