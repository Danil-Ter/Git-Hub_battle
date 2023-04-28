import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Popular from "../Popular/index";
import Battle from "../Battle/index";
import Results from "../Battle/Results";

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [ 
      {
        path: "/Git-Hub_battle/",
        element: <Home />,
      },
      {
        path: "/Git-Hub_battle/popular",
        element: <Popular />,
      },
      {
        path: "/Git-Hub_battle/battle",
        element: <Battle />,
      },
      {
        path: "/Git-Hub_battle/battle/results",
        element: <Results />,
      },
       {
        path: '*',
        element: <h1>Error</h1>,
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />

export default App;
