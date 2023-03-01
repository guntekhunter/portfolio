import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../Pages/Main";
import Portofolio from "../Pages/Portofolio";

export default function AnimationRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/portofolio" element={<Portofolio />}></Route>
      </Routes>
    </AnimatePresence>
  );
}
