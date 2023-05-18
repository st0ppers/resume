import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./Container";
import { Header } from "./Header/Header";
import { Home } from "./Pages/Home";
import { Footer } from "./Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Resume } from "./Pages/Resume";
import { Contact } from "./Pages/Contact";
import LandingPage from "./Pages/LandingPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LandingPage/>
    ),
    errorElement: (
      <Container>
        <Header />
        <Home />
        <Footer />
      </Container>
    ),
    children: [
      {
        path: "resume/Home",
        element: (
          <React.StrictMode>
            <Container>
              <Header />
              <Home />
              <Footer />
            </Container>
          </React.StrictMode>
        ),
      },
      {
        path: "resume/Resumee",
        element: (
          <React.StrictMode>
            <Container>
              <Header />
              <Resume />
              <Footer />
            </Container>
          </React.StrictMode>
        ),
      },
      {
        path: "resume/Contact",
        element: (
          <React.StrictMode>
            <Container>
              <Header />
              <Contact />
              <Footer />
            </Container>
          </React.StrictMode>
        ),
      },
    ],
  },
  // {
  //   path: "/Home",
  //   element: (
  //     <React.StrictMode>
  //       <Container>
  //         <Header />
  //         <Home />
  //         <Footer />
  //       </Container>
  //     </React.StrictMode>
  //   ),
  // // },
  // {
  //   path: "/Resume",
  //   element: (
  //     <React.StrictMode>
  //       <Container>
  //         <Header />
  //         <Resume />
  //         <Footer />
  //       </Container>
  //     </React.StrictMode>
  //   ),
  // },
  // {
  //   path: "/Contact",
  //   element: (
  //     <React.StrictMode>
  //       <Container>
  //         <Header />
  //         <Contact />
  //         <Footer />
  //       </Container>
  //     </React.StrictMode>
  //   ),
  // },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
