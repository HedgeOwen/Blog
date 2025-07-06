import {
  createHashRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Write from "./pages/Write"
import Single from "./pages/Single"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./style.scss"

const Layout = () => {
  return (<>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>);
}

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "post/:id",
        element: <Single/>,
      },
      {
        path: "write",
        element: <Write/>,
      },
    ]
  },
  {
    path: "register",
    element: <Register/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "/write",
    element: <Write/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
  ],
  {
    basename: process.env.PUBLIC_URL || "/"
  });

function App() {
  return (
    <div className="app">
      <div className="container"> 
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
