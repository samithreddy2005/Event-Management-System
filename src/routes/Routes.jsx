import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import EventList from "../pages/EventList/EventList";
import Signup from "../pages/Signup";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/eventList", element: <EventList /> },
  { path: "/signup", element: <Signup /> },
];
