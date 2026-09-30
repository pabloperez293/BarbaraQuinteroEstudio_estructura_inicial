import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import MobileNav from "./components/layout/MobileNav";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="pb-20 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <MobileNav />
    </>
  );
}