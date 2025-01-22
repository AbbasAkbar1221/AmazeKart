import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CartPage from "./pages/CartPage";
import HomePage, { Auth } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ProductPage from "./pages/ProductsPage";
import { useDispatch } from "react-redux";
import { setCurrentUser, setLoading } from "./slices/authSlice";
import { useRetryCall } from "./hooks";

function layout(element) {
  return (
    <>
      <Header />
      <Navbar />
      {element}
      <Footer />
    </>
  );
}

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  
  // const user = useSelector((state) => state.auth.currentUser);
  // useEffect(() => {
  //   if (user) {
  //     axios.get('http://localhost:5001/products', {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //       .then(response => {
  //         const products = response?.data || [];
  //         const items = products.map((product) => ({
  //           id: product._id,
  //           ...product,
  //           quantity: 1,
  //           isSelected: true,
  //         }));
  //         console.log('success');
  //       })
  //       .catch(err => console.error(err));
  //   }
  // }, [user]);

  // useEffect(() => {
  //     async function userDetails(){
  //       try{
  //         const res = await axios.get("http://localhost:5001/users/me", {
  //           headers: {Authorization: `Bearer ${token}`},
  //         });
  //         dispatch(setCurrentUser(res.data));
  //       } catch(err){
  //         console.log(err);
  //       }
  //     }
  //     userDetails();
  //   }, [])

  const [_, retryCall] = useRetryCall("get");

  useEffect(() => {
    const fetchUserDetails = async () => {
      dispatch(setLoading(true));
      try {
        const response = await retryCall("http://localhost:5001/users/me");
        dispatch(setCurrentUser(response.data));
        dispatch(setLoading(false));
      } catch (err) {
        console.error("Failed to fetch user details:", err);
      }
    };
    fetchUserDetails();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={layout(<HomePage />)} />

          <Route element={<Auth />}>
          <Route path="/cart" element={layout(<CartPage />)} />
          </Route>
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products" element={layout(<ProductPage />)} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
