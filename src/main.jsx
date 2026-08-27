import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Screens/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>HEllo world</h1>
    <Home/>
  </StrictMode>,
);
