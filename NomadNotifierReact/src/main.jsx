import React from 'react'
import ReactDOM from 'react-dom/client'
import SignIn from './routes/SignIn'
import Travel from './routes/Travel'
import App from './App'
import Calendar from './routes/Calendar'
import PastTravel from './routes/PastTravel'
import CreateAccount from './routes/CreateAccount'
import Destination from './routes/Destination'
import Hotel from './routes/Hotel'
import RoomNumber from './routes/RoomNumber'
import ConfirmReservation from './routes/ConfirmReservation'
import AuthDetails from './routes/AuthDetails'
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
    path: "/sign-in",
    element: <SignIn />,
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
  {
    path: "/roomnumber",
    element: <RoomNumber />,
  },
  {
    path: "/confirm-reservation",
    element: <ConfirmReservation />,
  },
  {
    path: "/auth-details",
    element: <AuthDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)