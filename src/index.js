import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //this react strict mode will render component two times in dev environment, to check if any failures in rendering
  <React.StrictMode>
    <>
      <App />
    </>
  </React.StrictMode>
);
