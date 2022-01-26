import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AlbumOfTheWeek from "./components/AlbumOfTheWeek";
import QuoteSection from "./components/QuoteSection";
import GreatestPhoto from "./components/GreatestPhoto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection />
        <AlbumOfTheWeek />
        <QuoteSection />
        <GreatestPhoto />
      </div>
      <Footer />
    </div>
  );
}

export default App;
