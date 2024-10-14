import { element } from "prop-types";
import App from "./App";
import { ErrorPage } from "./pages/ErrorPage";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { CartContextProvider } from "./contexts/CartContext";

const routes = [
  {
    path: "/",
    element: (
      <>
        <CartContextProvider>
          <Navbar/>
          <App />
        </CartContextProvider>
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "cart",
    element: (
      <>
        <CartContextProvider>
          <Navbar/>
          <Cart />
        </CartContextProvider>
      </>
    ),
  }
]

export default routes;