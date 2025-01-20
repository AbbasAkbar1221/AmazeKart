import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/products");
        setProductData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
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
