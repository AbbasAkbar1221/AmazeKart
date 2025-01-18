import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from './pages/ProfilePage'
import ProductPage from "./pages/ProductsPage";

function layout(element){
  return (
    <>
    <Header />
    <Navbar />
    {element}
    <Footer />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={layout(<HomePage />)} />
          <Route path="/cart" element={layout(<CartPage />)} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/products" element={layout(<ProductPage/>)} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
