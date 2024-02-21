import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegionDetails from "./pages/RegionDetails";
import DepartmentDetails from "./pages/DepartmentDetails";
import Profile from "./pages/Profile";

const router = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/region/:id" element={<RegionDetails />} />
    <Route path="/departement/:id" element={<DepartmentDetails />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="*" element={<div>404</div>} />
  </Routes>
);

export default router;