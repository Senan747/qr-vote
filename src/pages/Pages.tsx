import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function Pages() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
}

export default Pages;
