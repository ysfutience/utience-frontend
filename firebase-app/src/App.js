import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import CreatePost from "./pages/createPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "createPost",
    element: <CreatePost />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
}

export default App;
