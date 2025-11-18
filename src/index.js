import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let docTitle = document.title;
window.addEventListener("blur",()=>{document.title="Subhrajit Mishra";});
window.addEventListener("focus",() =>{ document.title =docTitle;});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
