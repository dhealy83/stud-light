import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap/";
// import { FaDonate } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useElements,
  useStripe,
  Elements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Donate = () => {
  const [lgShow, setLgShow] = useState(false);
  //Here
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    console.log("Creating payment intent...");

    const { error: backendError, clientSecret } = await fetch(
      "/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodType: "card",
          currency: "usd",
        }),
      }
    ).then((r) => r.json());

    if (backendError) {
      console.log(backendError.message);
      return;
    }
    console.log("Payment intent created");

    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
    if (stripeError) {
      console.log(stripeError.message);
      return;
    }
    console.log(
      `Payment intent (${paymentIntent.id}): ${paymentIntent.status}`
    );
  };
  // use testing from stripe.com/docs/testing
  //To Here
  return (
    <>
      <Button variant="light" onClick={() => setLgShow(true)}>
        Donate
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="lg-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="lg-modal">Donate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="(303)555-0123" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-5"
              id="payment-form"
              onSubmit={handleSubmit}
            >
              <Form.Label htmlFor="card-element">Card</Form.Label>
              <CardElement id="card-element" />
            </Form.Group>
            <div className="w-100">
              <div className="d-flex justify-content-center ">
                <Button variant="light" className="mx-2">
                  Donate $25
                </Button>
                <Button variant="light" className="mx-2">
                  Donate $50
                </Button>
                <Button variant="light" className="mx-2">
                  Donate $100
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Donate;
