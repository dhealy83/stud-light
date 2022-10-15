import React, { useState, useRef } from "react";
// All of the Bootstrap imports
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UpdateCard = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mb-5 h-100 wholeCard">
      <div>
        <div className="d-flex">
          <div className="col v-100">
            <Card className="m-2">
              <Form className="bg-secondary rounded-2">
                <Form.Group>
                  <Form.Label className="m-2 text-white">Title</Form.Label>
                  <Form.Control as="textarea" rows={1} />
                </Form.Group>
              </Form>
            </Card>
            <Card className="m-2">
              <Form className="bg-secondary rounded-2">
                <Form.Group>
                  <Form.Label className="m-2 text-white">Side One</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
              </Form>
            </Card>
            <Card className="m-2">
              <Form className="bg-secondary rounded-2">
                <Form.Group>
                  <Form.Label className="m-2 text-white">Side Two</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
              </Form>
            </Card>
            <Card className="m-2">
              <Form className="bg-secondary rounded-2">
                <Form.Group>
                  <Form.Label className="m-2 text-white">Notes</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
              </Form>
            </Card>
            <div className="m-2">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload image</Form.Label>
                <Form.Control type="file" size="lg" />
              </Form.Group>
            </div>
            <div className="m-2">
              <Button variant="secondary" size="lg" className="w-100">
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateCard;
