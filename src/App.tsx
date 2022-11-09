import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Soo from "./Routes/Soo";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Soo />} />;
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
