import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import CreateUserPage from "./pages/CreateUserPage";
import LoginPage from "./pages/LoginPage";
import ProjectPage from "./pages/ProjectPage";
import PledgePage from "./pages/PledgePage";

// Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

// CSS
import { useState } from "react";

const Layout = () => {

  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("token") !== null)

  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
      <Footer />
    </>
  );
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/donate", element: <PledgePage /> },
      { path: "/signup", element: <CreateUserPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;