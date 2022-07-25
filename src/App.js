import React from "react";
import HeaderNavigate from "./components/header/HeaderNavigate";
import Container from "./components/Container";
import Header from "./components/header/Header";
import Catalog from "./components/header/Catalog";
import SliderPresentation from "./components/slider/SliderPresentation"

function App() {
  return (
    <div className="app">
      <Container>
      <HeaderNavigate/>
      </Container>
      <Header/>
      <Container>
      <SliderPresentation/>
      </Container>
    </div>
  );
}

export default App;
