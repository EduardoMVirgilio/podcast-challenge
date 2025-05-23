import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Layout from "./Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
