import React from "react";
import Carousel from "../components/carousel/Carousel";
import CardComponent from "../components/card_component/CardComponent";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export function Auth() {
  const user = useSelector((state) => state.auth.currentUser);
  const location = useLocation();
  const loading = useSelector(state => state.auth.loading);
  if(loading){
    return <div>Loading in auth...</div>
  }
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
}

const HomePage = () => {
  return (
    <div className="relative">
      <Carousel />
      <div className="relative z-10 -mt-[25vh] bg-inherit">
        <CardComponent />
      </div>
    </div>
  );
};

export default HomePage;
