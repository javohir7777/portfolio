import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Contact, Experience, Home, Projects } from "./pages";
import "./App.css";
const App = () => {
  const data = [
    { name: "Empire of osmon", viwers: 988, favourite: false, id: 1 },
    { name: "Ertugrul", viwers: 789, favourite: false, id: 2 },
    { name: "Osmon", viwers: 1091, favourite: true, id: 3 },
  ];
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
