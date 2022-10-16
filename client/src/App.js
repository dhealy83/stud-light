import { React, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Carousel from "./components/Carousel/Carousel";
import AddCard from "./components/AddCard/AddCard";
import UpdateCard from "./components/UpdateCard/UpdateCard";
import NewCollection from "./components/NewCollection/NewCollection";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import WithNav from "./components/Nav/WithNav";
import WithoutNav from "./components/Nav/WithoutNav";

import LandingPage from "./components/Pages/LandingPage";
import Auth from "./utils/auth";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <ApolloProvider client={client}>
      <Router>
        {showNav && (
          <div>
            <Nav />
          </div>
        )}
        <Routes>
          <Route index element={<LandingPage funcNav={setShowNav} />} />

          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Carousel" element={<Carousel />} />
          <Route path="/AddCard" element={<AddCard />} />
          <Route path="/UpdateCard" element={<UpdateCard />} />
          <Route path="/NewCollection" element={<NewCollection />} />
        </Routes>
        {showNav && (
          <div>
            <Footer />
          </div>
        )}
      </Router>
      ;
    </ApolloProvider>
  );
};

export default App;
