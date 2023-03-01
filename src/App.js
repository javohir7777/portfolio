import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Contact, Experience, Home, Projects } from "./pages";
const App = () => {
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
