import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";
import SkillHighlightPage from "./pages/SkillHighlight.jsx";
import Chat from "./pages/Chat.jsx";
import CategoryPage from "./pages/CategoryPage.jsx"

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/skill",
        element: <SkillHighlightPage />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/:categoryName",
        element: <CategoryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
