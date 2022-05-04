import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContextProvider } from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
   // <React.StrictMode>
   <BrowserRouter>
      <CartContextProvider>
         <AuthContextProvider>
            <App />
         </AuthContextProvider>
      </CartContextProvider>
   </BrowserRouter>
   // </React.StrictMode>
);
