import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./components/Layout/Layout";
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/home" /> },
        {
          path: "/home", element: <Home />,
        },
        {
          path: "/about", element: <About />,
        },
        {
          path: "/portfolio", element: <Portfolio />,
        },
        {
          path: "/contact", element: <Contact />,
        },
      ],
    },
  ]);

  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
