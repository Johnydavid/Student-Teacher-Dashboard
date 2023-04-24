import "./App.css";
import React from "react";
import Create from "./student/Create";
import Home from "./student/Home";
import Read from "./student/Read";
import Update from "./student/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./student/Navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
