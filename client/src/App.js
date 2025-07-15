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
    <div className="layout">
    <Navbar/>
    <main className="main">
        <Outlet />
    </main>
    <Footer/>
    </div>
  </>);
}

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "post/:id",
        element: <Single />,
      },
      {
        path: "write",
        element: <Write />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/single",
    element: <Single />,
  },
];

const router = createHashRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
    },
});

function App() {
  return (
    <div className="app">
      <div className="container"> 
        <RouterProvider router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </div>
    </div>
  );
}

export default App;
