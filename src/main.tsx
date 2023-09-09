import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
  </React.StrictMode>
);
