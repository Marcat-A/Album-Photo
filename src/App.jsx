import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Settings from "./components/pages/Settings";
import Albums from "./components/pages/Albums";
import Album from "./components/pages/Album";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import French from "./lang/fr-CA.json"
import English from "./lang/en-US.json"

const local = navigator.language;

let lang;
if (local === "en-US"){
  lang = English
} else {
  lang = French
}
function App() {
  return (
    <IntlProvider locale messages={lang}>
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/albums" element={<Albums />} />
          <Route path="/albums/:id" element={<Album />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </IntlProvider>
  );
}

export default App;
