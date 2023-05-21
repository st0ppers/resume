import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
} from "react-router-dom";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <LandingPage/>
//     ),
//     errorElement: (
//       <Container>
//         <Header />
//         <Home />
//         <Footer />
//       </Container>
//     ),
//     children: [
//       {
//         path: "Home",
//         element: (
//           <React.StrictMode>
//             <Container>
//               <Header />
//               <Home />
//               <Footer />
//             </Container>
//           </React.StrictMode>
//         ),
//       },
//       {
//         path: "Resumee",
//         element: (
//           <React.StrictMode>
//             <Container>
//               <Header />
//               <Resume />
//               <Footer />
//             </Container>
//           </React.StrictMode>
//         ),
//       },
//       {
//         path: "Contact",
//         element: (
//           <React.StrictMode>
//             <Container>
//               <Header />
//               <Contact />
//               <Footer />
//             </Container>
//           </React.StrictMode>
//         ),
//       },
//     ],
//   },
//   // {
//   //   path: "/Home",
//   //   element: (
//   //     <React.StrictMode>
//   //       <Container>
//   //         <Header />
//   //         <Home />
//   //         <Footer />
//   //       </Container>
//   //     </React.StrictMode>
//   //   ),
//   // // },
//   // {
//   //   path: "/Resume",
//   //   element: (
//   //     <React.StrictMode>
//   //       <Container>
//   //         <Header />
//   //         <Resume />
//   //         <Footer />
//   //       </Container>
//   //     </React.StrictMode>
//   //   ),
//   // },
//   // {
//   //   path: "/Contact",
//   //   element: (
//   //     <React.StrictMode>
//   //       <Container>
//   //         <Header />
//   //         <Contact />
//   //         <Footer />
//   //       </Container>
//   //     </React.StrictMode>
//   //   ),
//   // },
// ]);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
