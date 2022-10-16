import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter as Router } from "react-router-dom";
const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <Router>
        <App />
      </Router>
    </Elements>
  </React.StrictMode>
);

reportWebVitals();
