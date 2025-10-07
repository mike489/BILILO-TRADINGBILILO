import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExportPage from "./page/export";
import Home from "./page/home";
import Header from "./components/home/Header";
import ContactUs from "./page/ContactUs";
import Footer from "./components/home/Footer";
import AboutUs from "./page/AboutUs";
import Blog from "./page/Blog";
import Import from "./page/Import";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/import" element={<Import />} />
          <Route path="/export" element={<ExportPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
