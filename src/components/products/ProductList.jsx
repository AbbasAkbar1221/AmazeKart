import React from "react";
import ProductCard from "./ProductCard";

const productData = [
  {
    id: 1,
    name: "Havells Adonia-i 25 Litre Storage Water Heater",
    description:
      "Wi-Fi Controlled, Smart & User Friendly | 5 Star Rated | Temp. Sensing",
    price: 18990.0,
    originalPrice: 21590.0,
    discount: 12,
    inStock: true,
    quantity: 1,
    rating: 4.3,
    reviews: 3031,
    image: "https://m.media-amazon.com/images/I/31cbLs6Hm0L._MCnd_AC_.jpg",
  },
  {
    id: 2,
    name: "Havells Otto 25 Litre Storage Water Heater",
    description:
      "Temp. Sensing LED Indicator | Anti Rust Tank | Shock Safe Plug",
    price: 13299.0,
    originalPrice: 21590.0,
    discount: 38,
    inStock: false,
    quantity: 1,
    rating: 4.5,
    reviews: 123,
    image: "https://m.media-amazon.com/images/I/31Qc5NoDTPL._MCnd_AC_.jpg",
  },
  {
    id: 3,
    name: "Racold Eterno Pro Storage Water Heater 25L",
    description:
      "Energy Efficient | Titanium Enamelled Coating | Free Standard Installation",
    price: 8399.0,
    originalPrice: 16899.0,
    discount: 50,
    inStock: true,
    quantity: 0,
    rating: 4.3,
    reviews: 4894,
    image: "https://m.media-amazon.com/images/I/31F6HpQj7iL._MCnd_AC_.jpg",
  },
  {
    id: 4,
    name: "IVAS Caloric 25 L Storage Water Heater",
    description:
      "BEE 5 Star | ISI | Shock Proof Plastic Body | 5 Year Warranty",
    price: 6899.0,
    originalPrice: 13705.0,
    discount: 50,
    inStock: true,
    quantity: 0,
    rating: 5.0,
    reviews: 1,
    image: "https://m.media-amazon.com/images/I/31vZXn7PcqL._MCnd_AC_.jpg",
  },
  {
    id: 5,
    name: "Bevzilla 24 Flavoured Coffee Sachets & Frother Coffee Kit",
    description: "Premium instant coffee kit with assorted flavors. Perfect for quick coffee breaks or on-the-go moments.",
    price: 249.0,
    originalPrice: 799.0,
    discount: 69,
    inStock: true,
    quantity: 1,
    rating: 4.2,
    reviews: 200,
    image: "https://m.media-amazon.com/images/I/71LSGe2HacL._AC_AA360_.jpg",
  },
  {
    id: 6,
    name: "Apple MacBook Air Laptop with M2 chip",
    description:
      "13.6-inch Liquid Retina Display, 8GB RAM, 512GB SSD Storage, 1080p FaceTime HD Camera.",
    price: 500.0,
    originalPrice: 999.0,
    discount: 50,
    inStock: false,
    quantity: 1,
    rating: 4.8,
    reviews: 15000,
    image: "https://m.media-amazon.com/images/I/719C6bJv8jL._AC_AA440_.jpg",
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 mx-2">
      {productData.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;