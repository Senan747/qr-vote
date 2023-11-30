import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/teamId/:id/*" element={<Home />} />
    </Routes>
  );
}

export default Pages;
