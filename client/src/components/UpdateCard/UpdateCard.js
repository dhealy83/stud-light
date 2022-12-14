import React, { useState, useRef, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
// All of the Bootstrap imports
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { ADD_CARD } from "../../utils/mutations";

import { QUERY_USER_COLLECTION } from "../../utils/queries";
import StoreCollections from "../../utils/StoreCollections";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import OffcanvasNav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const [index, setIndex] = useState("");
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    notes: "",
  });

  const navigate = useNavigate();
  //            *error  *data
  const [addCard, { err, dat }] = useMutation(ADD_CARD);

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

  const userCollections = data.user.collections;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    // console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddCard = async (evt) => {
    evt.preventDefault();

    await addCard({
      variables: {
        collectionId: index,
        question: formData.question,
        answer: formData.answer,
        notes: formData.notes,
      },
    });

    setFormData({ question: "", answer: "", notes: "" });
  };

  const optionMap = userCollections.map((s) => {
    let title = s.title;
    let id = s._id;
    return <option value={id}>{title}</option>;
  });

  const handleCollectionChoice = async (evt) => {
    // console.log(evt.target.value);
    setIndex(evt.target.value);
    console.log(index);
  };

  const handleNav = async (evt) => {
    navigate("/home");
  };

  return (
    <div className="mb-5 h-100 wholeCard">
      <div>
        <div className="d-flex">
          <Form className="col v-100" onSubmit={handleAddCard}>
            <div className="m-2 bg-secondary rounded-2 text-white">
              <Form.Label className="m-2">Select Collection</Form.Label>
              <Form.Select onChange={handleCollectionChoice}>
                {optionMap}
              </Form.Select>
            </div>
            <Card className="m-2">
              <Form className="bg-secondary rounded-2">
                <Form.Group>
                  <Form.Label className="m-2 text-white">
                    Add Your Question Below
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="question"
                    onChange={handleChange}
                    value={formData.question}
                    rows={5}
                    placeholder="Required"
                  />
                </Form.Group>
              </Form>
            </Card>
            <Card className="m-2">
              <Form className="bg-secondary rounded-2">
                <Form.Group>
                  <Form.Label className="m-2 text-white">
                    Add Your Answer Below
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="answer"
                    onChange={handleChange}
                    value={formData.answer}
                    rows={5}
                    placeholder="Required"
                  />
                </Form.Group>
              </Form>
            </Card>
            <Card className="m-2">
              <Form className="bg-secondary rounded-2">
                <Form.Group>
                  <Form.Label className="m-2 text-white">Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="notes"
                    onChange={handleChange}
                    value={formData.notes}
                    rows={5}
                    placeholder="Optional text here..."
                  />
                </Form.Group>
              </Form>
            </Card>
            {/* <div className="m-2">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload image</Form.Label>
                <Form.Control type="file" name="image" size="lg" />
              </Form.Group>
            </div> */}
            <div className="col">
              <div className="m-2 col">
                <Button
                  variant="secondary"
                  type="submit"
                  size="lg"
                  className="w-100"
                >
                  Update Card
                </Button>{" "}
              </div>
              <div className="m-2 col"></div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default AddCard;
