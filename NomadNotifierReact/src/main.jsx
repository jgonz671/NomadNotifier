import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './routes/Login'
import Travel from './routes/Travel'
import App from './App'
import Calendar from './routes/Calendar'
import PastTravel from './routes/PastTravel'
import CreateAccount from './routes/CreateAccount'
import Destination from './routes/Destination'
import Hotel from './routes/Hotel'
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
      { 
        index: true, 
        element: <Root /> 
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
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
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/travel",
    element: <Travel />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/hotel",
    element: <Hotel />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)