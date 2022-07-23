import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Personas from '../components/Personas';
import Home from "../pages/Home";
import Home1 from "../pages/Home1";
import Home2 from "../pages/Home2";
//import Mascotas from '../components/Mascotas';
//import Servicios from '../components/Servicios';
import PersonasPage from "../pages/PersonasPage";
import MascotasPage from "../pages/MascotasPage";
import ServiciosPage from "../pages/ServiciosPage";
import "./styles.css"

import Menu from "../pages/Menu";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        personas: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        mascotas: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        servicios: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Menu />
            <section className="view-container">
              <Routes>
                <Route path="/personas" element={<Home />} />
                <Route path="/infopersonas/:id" element={<PersonasPage />} />

                <Route path="/mascotas" element={<Home1 />} />
                <Route path="/infomascotas/:id" element={<MascotasPage />} />

                <Route path="/servicios" element={<Home2 />} />
                <Route path="/infoservicios/:id" element={<ServiciosPage />} />
              </Routes>
            </section>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
