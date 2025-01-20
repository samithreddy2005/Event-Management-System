// FILE: src/routes/routes.jsx
import Home from "../pages/Home/Home";
import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetail from "../pages/EventDetails/EventDetails";

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/events', element: <EventList /> },
  { path: '/find-events', element: <FilterEvents /> },
  { path: '/events/:id', element: <EventDetail /> }
];