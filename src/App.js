import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Outlet } from "react-router-dom";
import Home from "./pages/Home-page/Home-page";
import Service from "./pages/Service-page/Service";
import About from "./pages/About-page/aboutPage";
import Hiring from "./pages/Hiring-page/Hiring";
import Privacy from './pages/privacy/Privacy';
import Terms from './pages/terms/Terms'
import "../src/app.css";
import Model from "./components/Model";

function App() {
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false);
  const [hasRedirected, setHasRedirected] = useState(false);

  // Determine the scroll position to trigger the model
  const scrollThreshold = 1000; // Adjust this value as needed

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > scrollThreshold &&
        !hasRedirected &&
        window.location.pathname === "/"
      ) {
        setShowModel(true);
        // Set the flag to indicate that the redirection has occurred
        setHasRedirected(true);
        // Remove the scroll event listener to prevent multiple triggers
        window.removeEventListener("scroll", handleScroll);
        // Navigate to the login page
        navigate("/login");
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate, hasRedirected]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Model />} />
      </Routes>
      {showModel && <Outlet />}
    </div>
  );
}

export default App;
