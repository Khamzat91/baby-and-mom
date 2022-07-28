import React from "react";
import HeaderNavigate from "./components/header/HeaderNavigate";
import Container from "./components/Container";
import Header from "./components/header/Header";
import Catalog from "./components/header/Catalog";
import SliderPresentation from "./components/slider/SliderPresentation"
import SliderCarousel from "./components/slider/SliderCarousel";
import Commercial from "./components/commercial/Commercial";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="app">
      <Container>
      <HeaderNavigate/>
      </Container>
      <Header/>
      <Container>
      <SliderPresentation/>
      <SliderCarousel/>
      <Commercial/>
      <Products/>
      </Container>
    </div>
  );
}

export default App;
