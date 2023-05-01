import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./Container";
import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
import { Footer } from "./Footer/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  </React.StrictMode>
);
