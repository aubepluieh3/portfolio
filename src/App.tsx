import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Soo from "./Routes/Soo";
import Project from "./Routes/Project";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Soo />} />;
        <Route path="/project" element={<Project />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
