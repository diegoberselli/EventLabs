import React from "react";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);