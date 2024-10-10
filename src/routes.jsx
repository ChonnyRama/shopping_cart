import { element } from "prop-types";
import App from "./App";
import { ErrorPage } from "./pages/ErrorPage";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";

const routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar/>
        <App />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "cart",
    element: (
      <>
        <Navbar/>
        <Cart />
      </>
    ),
  }
]

export default routes;