import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Portofolio from "./Pages/Portofolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/portofolio" element={<Portofolio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
