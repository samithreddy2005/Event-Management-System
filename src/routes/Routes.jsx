import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import EventList from "../pages/EventList/EventList";  // Ensure the EventList component is imported

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/eventList', element: <EventList /> },  // Make sure this exists
];
