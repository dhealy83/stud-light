import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

(async () => {
  const response = await fetch("/secret");
  const { client_secret: clientSecret } = await response.json();
  // Render the form using the clientSecret
})();

const Donate = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button variant="light" onClick={() => setLgShow(true)}>
        Donate
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Donate</Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
};

export default Donate;
