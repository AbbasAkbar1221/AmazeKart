import React from 'react'
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;