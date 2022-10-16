import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage/HomePage";
import Carousel from "./components/Carousel/Carousel";
import AddCard from "./components/AddCard/AddCard";
import UpdateCard from "./components/UpdateCard/UpdateCard";
import NewCollection from "./components/NewCollection/NewCollection";
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

function App() {
  // const checkLogin = async (e) => {
  //   e.preventDefault();
  //   Auth.loggedIn();
  // };
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh overflow-auto">
        <div>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            {/* {Auth.loggedIn() ? <LandingPage /> : <Redirect to="/home" />} */}
            {/* </Route> */}

            <Route path="/home" element={<HomePage />} />
            <Route path="/Carousel" element={<Carousel />} />
            <Route path="/AddCard" element={<AddCard />} />
            <Route path="/UpdateCard" element={<UpdateCard />} />
            <Route path="/NewCollection" element={<NewCollection />} />
          </Routes>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
