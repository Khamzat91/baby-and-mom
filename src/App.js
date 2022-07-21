import React from "react";
import HeaderNavigate from "./components/header/HeaderNavigate";
import Container from "./components/Container";
import Header from "./components/header/Header";
import Catalog from "./components/header/Catalog";


function App() {
  return (
    <div className="app">
      <Container>
      <HeaderNavigate/>
      </Container>
      <Header/>
    </div>
  );
}

export default App;
