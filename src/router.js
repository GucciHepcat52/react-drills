import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Details from "./components/Details";

export default (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/details" element={<Details />} />
  </Routes>
);
