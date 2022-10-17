import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { QUERY_SINGLE_COLLECTION } from "../../utils/queries";

import {
  FaQuestion as Question,
  FaExclamation as Answer,
} from "react-icons/fa";
// All of the Bootstrap imports

// import FlashCard from "./FlashCard";
// import CardData from "./CardData";
import OffcanvasNav from "../Nav/Nav";
import Footer from "../Footer/Footer";

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

const FlashCarousel = () => {
  const [index, setIndex] = useState(0);
 
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setToggle(false);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [toggle, setToggle] = useState(false);

  const collectionId = localStorage.getItem("currentCollection");

  const { loading, data, error } = useQuery(
    QUERY_SINGLE_COLLECTION,
    {
      variables: { collectionId: collectionId },
    },
    []
  );
  if (loading) return "Loading";
  // console.log(data);
  const collectionTitle = data.collection.title;


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
            {data.collection.cards.map((obj, i) => {
              return (
                <Carousel.Item className="buttonCheckBox" key={obj._id}>
                  <RadioButtons key={i} index={i} />
                  <Col className="d-flex justify-content-evenly mx-3">
                    <h1>{collectionTitle}</h1>
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
                {/* notes are currently hardcoded to grab the notes of the second card in the array */}
                <Card.Text>{data.collection.cards[0].notes}</Card.Text>
              </Card.Body>
            </Card>

            <div className="m-2">
              <Link to="/UpdateCard">
                <Button variant="secondary" size="lg" className="w-100">
                  Update
                </Button>
              </Link>
            </div>
            <div className="m-2">
              <Button
                variant="secondary"
                size="lg"
                className="w-100"
                onClick={handleShow}
              >
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you'd like to delete this card?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Delete Card
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

const CardIcon = ({ icon }) => <div>{icon}</div>;
export default FlashCarousel;
