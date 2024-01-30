import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login'
import Travel from './Travel'
import App from './App'
import Calender from './Calender'
import PastTravel from './PastTravel'
import CreateAccount from './CreateAccount'
import "./index.css";
import Root from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Root /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/travel",
    element: <Travel />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/past-travel",
    element: <PastTravel />,
  },
  {
    path: "/calender",
    element: <Calender />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)