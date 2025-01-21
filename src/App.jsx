import React, {useEffect} from "react";
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
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

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
  const user = useSelector(state=>state.auth.currentUser)
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (user) {
      axios.get('http://localhost:5001/products', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          const products = response?.data || [];
          const items = products.map((product) => ({
            id: product._id,
            ...product,
            quantity: 1,
            isSelected: true,
          }));
          console.log('success');
        })
        .catch(err => console.error(err));
    }
  }, [user]);

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
