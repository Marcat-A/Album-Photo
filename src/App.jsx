import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Settings from "./components/pages/Settings";
import Albums from "./components/pages/Albums";
import Album from "./components/pages/Album";
import Language from "./components/pages/Language";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/albums" element={<Albums />} />
          <Route path="/albums/:id" element={<Album />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/language" element={<Language/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
