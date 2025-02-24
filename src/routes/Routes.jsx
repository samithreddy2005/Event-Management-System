import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import EventList from "../pages/EventList/EventList";
import EventDetails from "../pages/EventDetails/EventDetails"; // Import EventDetails
import Signup from "../pages/Signup";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/eventList", element: <EventList /> },
  { path: "/signup", element: <Signup /> },
  { path: "/events/:id", element: <EventDetails /> }, // Add dynamic route for Event Details
];
