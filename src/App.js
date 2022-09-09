import logo from "./logo.svg";
import "./App.css";
import Carousel from "./Components/Carousel";

import Navbar from "./Components/Navbar";
import A2ZTests from "./Components/A2Ztest";
import Footer from "./Components/Footer";
import Organbased from "./Components/Organbased";
import CarouselTwo from "./Components/Maincarousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <CarouselTwo />
      <Organbased />
      <A2ZTests />
      <Footer />
    </div>
  );
}

export default App;
