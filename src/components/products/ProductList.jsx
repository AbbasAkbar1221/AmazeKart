import React, { use, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { useRetryCall } from "../../hooks";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const response = await axios.get("http://localhost:5001/products", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setProductData(response.data);
  //       setLoading(false);
  //       window.scrollTo(0, 0);
  //     } catch (err) {
  //       navigate("/login");
  //       setError("Failed to fetch products");
  //       setLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, [])

  const [loading, retryCall] = useRetryCall("get");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await retryCall("http://localhost:5001/products");
        setProductData(response.data);
        window.scrollTo(0, 0);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to fetch products");
        navigate("/login");
      }
    };
    fetchProducts();
  }, []);



  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 mx-2">
      {productData.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
