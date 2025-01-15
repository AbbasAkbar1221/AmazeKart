import React from 'react'
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';
import CardComponent from "./components/card_component/CardComponent";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Carousel/>
      <CardComponent/>
      <Footer/>
    </div>
  );
}

export default App;