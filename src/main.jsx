import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter>
     
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="mui/accordion" element={<Accordion />} />
      </Routes>
    </BrowserRouter> */}
    <App />
  </React.StrictMode>
);
