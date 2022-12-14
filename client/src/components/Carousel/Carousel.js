import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { QUERY_SINGLE_COLLECTION } from "../../utils/queries";

import { FaQuestionCircle as Question, FaExclamationCircle as Answer } from "react-icons/fa";
// All of the Bootstrap imports

// import FlashCard from "./FlashCard";
// import CardData from "./CardData";
import OffcanvasNav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import { Row, Button, Col, Container, Carousel, Card, ButtonGroup } from "react-bootstrap";
// All of the image imports
import cardBackground from "../../assets/cardBackground.jpg";
// import CardData from "./CardData";

// Local css files
import "./FlashCard.css";
import RadioButtons from "./RadioButtons";

const FlashCarousel = ({ route, navigation, collectionID }) => {
  //const { currentIndex } = route.params;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setToggle(false);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [toggle, setToggle] = useState(false);

  const { loading, data, error, refetch } = useQuery(
    QUERY_SINGLE_COLLECTION,
    {
      variables: { collectionId: collectionID },
    },
    []
  );

  if (loading) return "Loading";

  const collectionTitle = data.collection.title ?? "";

  const collectionNotes = data.collection.notes ?? "";

  return (
    <>
      {/* <OffcanvasNav setCollectionID={setCollectionID} refetch={refetch} /> */}
      <div className="d-flex justify-content-center h-75">
        <div className="wholeCard">
          <div>
            {data.collection.cards.length ? (
              <Carousel activeIndex={index} onSelect={handleSelect} className="card m-2 border boarder-2 boarder-secondary rounded-3 " interval="10000000">
                {data.collection.cards.map((obj, i) => {
                  return (
                    <Carousel.Item className="buttonCheckBox " key={obj._id}>
                      {/* <RadioButtons key={i} index={i} /> */}
                      <Col className="d-flex justify-content-center mx-3">
                        <h1>{collectionTitle}</h1>
                        <ButtonGroup className="m-2 d-flex justify-content-end"></ButtonGroup>
                      </Col>
                      <img className="d-block w-100" src={cardBackground} alt="First slide" />
                      <Carousel.Caption className="carouselText text-dark ">
                        <Container className="">
                          <Col className="">
                            <Row>
                              {toggle && (
                                <div class="container-fluid bg-muted w-75  border border-secondary border-3 p-3 my-2">
                                  <p class="card-text text-lg">{obj.answer}</p>
                                </div>
                              )}
                              {!toggle && (
                                <div class="container-fluid bg-muted w-75  border border-secondary border-3 p-3 my-2">
                                  <p class="card-text">{obj.question}</p>
                                </div>
                              )}

                              {toggle ? (
                                <a href="#" onClick={() => setToggle(!toggle)}>
                                  <CardIcon icon={<Question size="2rem" class="text-info" />} />
                                </a>
                              ) : (
                                <a href="#" onClick={() => setToggle(!toggle)}>
                                  <CardIcon icon={<Answer size="2rem" class="text-success" />} />
                                </a>
                              )}
                            </Row>
                          </Col>
                        </Container>
                      </Carousel.Caption>
                      <div>
                        <Card className="m-2">
                          <Card.Title className="bg-secondary text-white p-2 rounded-top">Notes</Card.Title>
                          <Card.Body>
                            {/* notes are currently hardcoded to grab the notes of the second card in the array */}
                            <Card.Text>
                              {/* This should be obj.notes */}

                              {/* // ? data.collection.cards[0].notes // : "" */}
                              <div>{obj.notes}</div>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            ) : (
              <div>Empty Cards</div>
            )}
          </div>
          <div className="d-flex">
            <div className="col v-100">
              <div className="m-2">
                <Link to="/UpdateCard">
                  <Button variant="secondary" size="lg" className="w-100">
                    Update
                  </Button>
                </Link>
              </div>
              <div className="m-2">
                <Button variant="secondary" size="lg" className="w-100" onClick={handleShow}>
                  Delete Collection
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
              <Button variant="danger" onClick={handleClose}>
                Delete Card
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <Footer />
    </>
  );
};

const CardIcon = ({ icon }) => <div>{icon}</div>;
export default FlashCarousel;
