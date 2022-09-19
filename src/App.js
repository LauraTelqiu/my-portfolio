import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />

      </Routes>
      <Footer />
    </div>
  );
}
