import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import ErrorPage from "./errorPage"
import "./index.css";
import Root from "./routes/root";
// import Typewriter from "typewriter-effect";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "error",
        element: <ErrorPage />,
      },
      // ... you can add more routes here as children
    ],
  },
  // ... you can add more top-level routes here
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


// function main() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <div className="typewriter-container">
//         <Typewriter
//             onInit={(typewriter) => {
//               typewriter
//                 .typeString("Create. Plan. Enjoy.")
//                 .pauseFor(1000)
//                 .deleteAll()
//                 .typeString("Nomad Notifier.")
//                 .start();
//             }}
//           />
//         </div>
//         <div className="buttons">
//           <button className="btn plan-travel-btn">Plan a Travel</button>
//           <button className="btn login-btn">Login</button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
