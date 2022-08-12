import React from "react";
import HeaderNavigate from "./components/header/HeaderNavigate";
import Container from "./components/Container";
import Header from "./components/header/Header";
import Catalog from "./components/header/Catalog";
import SliderPresentation from "./components/slider/SliderPresentation"
import SliderCarousel from "./components/slider/SliderCarousel";
import Commercial from "./components/commercial/Commercial";
import Products from "./components/products/Products";
import Sale from "./components/sale/Sale";
import AboutDiscounts from "./components/aboutDiscounts/AboutDiscounts";
import Popular from "./components/popular/Popular";
import Novelty from "./components/novelty/Novelty";
import AboutUs from "./components/aboutUs/AboutUs";
import Brand from "./components/brand/Brand";
import Contacts from "./components/contacts/Contacts";
import Reviews from "./components/reviews/Reviews";
import Wallpaper from "./components/wallpaper/Wallpaper";
import OurBlog from "./components/ourBlog/OurBlog";
import Footer from "./components/footer/Footer";

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
      <Sale/>
      </Container>
      <AboutDiscounts/>
      <Container>
      <Popular/>
      <Novelty/>
      <AboutUs/>
      <Brand/>
      <Contacts/>
      <Reviews/>
      <Wallpaper/>
      <OurBlog/>
      <Footer/>
      </Container>
    </div>
  );
}

export default App;
