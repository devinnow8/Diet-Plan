import { createBrowserRouter } from "react-router-dom";
import { Login, SignUp, DetaliSlider, Recipe } from "../screens";

import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "detail",
        element: <DetaliSlider />,
      },
      {
        path: "recipe",
        element: <Recipe />,
      },
    ],
  },
]);
