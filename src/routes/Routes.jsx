import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import EventList from "../pages/EventList/EventList";
import EventDetails from "../pages/EventDetails/EventDetails";
import Signup from "../pages/Signup";
import Register from "../pages/Register";
import Payment from "../pages/Payment"; // Ensuring consistent structure for pages

export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/eventList", element: <EventList /> },
  { path: "/signup", element: <Signup /> },
  { path: "/events/:id", element: <EventDetails /> },
  { path: "/register", element: <Register /> },
  { path: "/payment", element: <Payment /> },
]);
