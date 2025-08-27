import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./container/home";
import Navbar from "./components/organisms/navbar";
import About from "./container/about";
import Contact from "./container/contact";
import Footer from "./components/organisms/footer";
import { Stack } from "@mui/material";
import Analyze from "./container/analyze";

export default function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/*";

  return (
    <Stack height="100vh">
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!hideFooter && <Footer />}
    </Stack>
  );
}
