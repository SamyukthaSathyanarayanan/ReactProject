import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { ProductProvider, createProductContext } from "./Context/ProductProvider";
import { AuthProvider } from "./Context/AuthProvider";

export {createProductContext};
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <AuthProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
